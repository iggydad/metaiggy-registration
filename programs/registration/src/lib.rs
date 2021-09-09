use anchor_lang::prelude::*;

declare_id!("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS");

#[program]
pub mod registration {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>, price: u8) -> ProgramResult {
        let my_account = &mut ctx.accounts.my_account;
        my_account.price = price;
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(init, payer = user, space = 8 + 1)]
    pub my_account: Account<'info, MyAccount>,
    pub user: AccountInfo<'info>,
    pub system_program: AccountInfo<'info>,
}

#[account]
pub struct MyAccount {
    pub price: u8,
}

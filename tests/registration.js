const anchor = require('@project-serum/anchor');
const assert = require("assert");
const { SystemProgram } = anchor.web3;

describe('registration', () => {
  // Use a local provider.
  const provider = anchor.Provider.local();

  // Configure the client to use the local cluster.
  anchor.setProvider(provider);

  it('Is initialized!', async () => {
    // Add your test here.
    const program = anchor.workspace.Registration;

    const myAccount = anchor.web3.Keypair.generate();

    await program.rpc.initialize(3, {
      accounts: {
        myAccount: myAccount.publicKey,
        user: provider.wallet.publicKey,
        systemProgram: SystemProgram.programId,
      },
      signers: [myAccount],
    });

    // Fetch the newly created account from the cluster.
    const account = await program.account.myAccount.fetch(myAccount.publicKey);

    // Check it's state was initialized.
    assert.strictEqual(account.price, 3);
  });
});

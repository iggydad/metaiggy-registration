# MetaIggy | Registration

This document explains the user registration process to receive a random NFT with attributes. 

# Endpoints

## RegisterForNFTs
RPC call to register for a Iggy.

Params:
* Account as Signer
* Amount NFTs to reserve (1-5)?
* systemProgram
* (optional) random number

## Get Registrations Counter
The website will have a endpoint to request how many registrations left available and it will display the information in the registration page. 

## Registration Flow
When a customer sends a signed registration, the program will first evaluate if the information is correct.

### Checks:
1) Is the account valid
2) Has selected a valid amount of NFTs to claim
3) Has the account enough SOL considering the NFT price * amount of NFT requested

### Registering
1) First we will increase the registration counter.
2) Then the program will store the account pubkey into a whitelist array for claim the NFT once they are released.
3) The program will send the SOL to another account maintained by the game. (maybe we could already add some tokenomics/accounts to store the SOL [% team, %charity, % dev, % hosting cost]).
4) The program will return the registration number

## Random number
There is another aspect to consider, the randomize number which generate a unique pet character...

We have few options to consider:

1) Offchain: We don't share this information with the user and we keep it in a backend (downsides, the user won't trust how it works and if it was manipulated)
2) Offchain: We generate the value and store in the metadata / arweave JSON. It will be generated when the NFT image is uploaded with the JSON file.
3) OnChain: We generate the value onChain and we associate with the registration number. Ex. the registration 1 has the random number 12313123213 number. We could validate that it's unique. We can provide this number to the user so based in the documentation he will know, before the minting, how the image will look like. if it will be a common/uncommon/epic NFT,...
4) Mixed: We generate offchain and we pass it as an argument to the registration.


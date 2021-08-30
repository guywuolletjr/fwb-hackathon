# Permissionless DAO membership with algorithmic pricing

## Motivation 

Friends with Benefits has seen immense and rapid growth in the past months. The community has demonstrated an ability to create incredibly high quality in person experiences (shout out Miami + NYC) and fostered the best group chat in crypto. 

During this period of expansion, the price of an FWB membership has also rapidly increased. Memberships could previously be purchased for hundreds of dollars or less, and now cost more than $10k. While many in the crypto community have significant financial assets and the cost of membership isn’t a barrier, other high quality potential members could be excluded based on the rising cost. This is not a new discussion and any exploration should be informed by the prior conversations had [here](https://discord.com/channels/749418486874243212/878385085693460520/878385149660766218), [here](https://discord.com/channels/749418486874243212/874657345165205584/874658035270844476), [here](https://discord.com/channels/749418486874243212/872951316824068178/872951584370339931), and throughout the Discord. 

In tandem, FWB has relied upon a membership committee to admit new members to the community. This has created an incredibly high quality community, but could cause tension with the open and decentralized ethos of crypto. If FWB could introduce a deterministic way to expand membership it could help scale the DAO. This does not obviate the need for a membership committee or mean that governance based membership approvals should cease to exist. We believe the bar for algorithmic entry should start incredibly high, and thaw overtime to a reasonable equilibrium based on the empirical success of admitted members' contributions to the community. 

## Design goals 
- Create a scoring system that could be utilized for FWB membership 
   - Such a score should incorporate both on and off chain data. We can start simply with the on-chain transaction graph, the Twitter social graph, and potentially a record of Discord interactions across servers. 
   - Any membership scoring system should weight the benefits of admitting membership who are already well connected with existing FWB members while fostering diversity and encouraging an expansion of the FWB social graph 
- Each member of FWB brings unique and diverse viewpoints and skillsets. With that said, some potential members are a better fit for the DAO than others. Some members are also more able to pay than others. Any membership scoring algorithm could quote a membership threshold or price to a potential member. As potential members become better fits the membership price could decline over time while their assets increase. 
   - Note: a membership score does not have to factor in ability to pay, and public wallets are not always a good representation of ability to pay.
- Any deterministic scoring system for membership can be gamed if released transparently. We believe any choices as important as membership should be made in a transparent way. This creates tension, but also an opportunity. A well designed scoring system would incentivize potential new members to take actions beneficial to FWB and it’s existing members in order to increase their score.

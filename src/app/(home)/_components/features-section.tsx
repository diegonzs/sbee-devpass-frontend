interface HomeFeatureSectionProps {
  title: string
  description: React.ReactNode
}
const HomeFeatureContent = ({
  title,
  description,
}: HomeFeatureSectionProps) => {
  return (
    <div className="relative flex">
      <div className="flex flex-col gap-6">
        <h2 className="max-w-[503px] text-left text-5xl">{title}</h2>
        <div className="max-w-[574px] text-lg">{description}</div>
      </div>
    </div>
  )
}

export const FeaturesSection = () => {
  return (
    <section className="w-full bg-white pb-[138px] pl-[130px] pr-[96px] pt-[119px]">
      <div className="flex flex-col gap-[182px]">
        <HomeFeatureContent
          title="NFT-Based Developer Pass + Unlockable Tokens"
          description={
            <>
              <p className="mb-6">
                {`Each DevPass is an NFT that uniquely identifies a project or
                  developer's funding agreement and serves as a symbol of
                  ownership. This NFT can be transferred by the project team as
                  needed`}
              </p>
              <p>
                {`The pass contains a specified amount of ERC-20 tokens (e.g., $SBEE) locked within the NFT.`}
              </p>
            </>
          }
        />
        <div className="self-end">
          <HomeFeatureContent
            title="Milestone Validation + Community Voting"
            description={
              <div className="flex flex-col gap-6">
                <p>
                  {`When a developer has a milestone they are ready for, they can submit demo + code review to the community.`}
                </p>
                <p>
                  {`The pass outlines specific milestones that the project aims to achieve, such as Proof of Concept and MVP.`}
                </p>
                <p>
                  {`Milestone completion is validated through community voting, where only holders of a specific token (e.g., SBEE) can participate, creating a token-gated system.`}
                </p>
              </div>
            }
          />
        </div>
      </div>
    </section>
  )
}

const WhoIsThisFor = () => {
  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4 max-w-5xl">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary">
          Who Is REACH Bags Studio For?
        </h2>

        <p className="text-lg text-muted-foreground leading-relaxed mb-10 text-center max-w-3xl mx-auto">
          REACH Bags Studio is ideal wherever bags need to be designed and sold
          using realistic 3D visualization instead of multiple physical samples.
        </p>

        {/* Bag brands */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Bag and luggage brands
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Manufacturers of handbags, backpacks, trolleys, duffel bags,
              laptop bags, and travel accessories that develop seasonal
              collections and style variants.
            </li>
            <li>
              Brands needing a reusable 3D asset library for catalogues,
              lookbooks, and digital campaigns across markets.
            </li>
          </ul>
        </div>

        {/* Designers */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Fashion and accessory designers
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Independent designers and studios creating premium or designer
              bags that require fast digital prototyping to refine shapes,
              proportions, and detailing.
            </li>
            <li>
              Labels offering limited editions or collaborations that benefit
              from visualizing colour, material, and hardware combinations
              before sampling.
            </li>
          </ul>
        </div>

        {/* E-commerce */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            E-commerce and D2C bag retailers
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Online bag and luggage stores wanting interactive 3D/360-degree
              views and configurators to increase engagement and conversions.
            </li>
            <li>
              D2C brands that allow shoppers to customize colours, materials,
              monograms, and hardware and see them instantly in 3D.
            </li>
          </ul>
        </div>

        {/* Corporate gifting */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Corporate gifting and promotional product companies
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Specialists producing branded backpacks, laptop bags, and totes
              for corporate clients, events, and institutions.
            </li>
            <li>
              Sales teams needing quick 3D mockups with client logos and
              colours to close deals without waiting for physical mock samples.
            </li>
          </ul>
        </div>

        {/* OEM / ODM */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            OEM/ODM manufacturers for global labels
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Factories that design and manufacture bags for international
              brands under OEM/ODM arrangements.
            </li>
            <li>
              Development teams using 3D prototyping to align quickly with
              buyer requirements and reduce the number of physical prototype
              rounds.
            </li>
          </ul>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-xl font-bold mb-3 text-primary">
            Design schools and training institutes
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Fashion, accessory, and leather design programs teaching modern
              3D workflows for bag and small-leather-goods development.
            </li>
            <li>
              Skill-development centres preparing students for digital design
              and visualization roles in bag and luggage companies.
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default WhoIsThisFor;

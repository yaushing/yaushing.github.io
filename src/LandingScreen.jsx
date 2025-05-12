import CarouselInstance from "./CarouselLogic";

function LandingScreen() {
    return (
        <CarouselInstance
            items={[
                <div>Hellur</div>,
                <div>Goodbuy</div>
            ]}
            autoplay={false}
        />
    );
}

export default LandingScreen;
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const Particle = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles1"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                // fullScreen: { enable: false },
                background: {
                    color: {
                        // value: "#00002c",
                    },
                },
                fpsLimit: 120,
                interactivity: {

                    events: {
                        onClick: {
                            enable: false,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "connect",
                        },
                        resize: false,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        connect: {
                            radius: 250,
                            distance: 100,
                            duration: 0.4,
                            speed: 0.5,
                            links: {

                                opacity: 0.1
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 1200
                                }
                            }
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffa500",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 80,
                        enable: true,
                        opacity: 0.1,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 0.5,
                        straight: false,
                        attract: {
                            enable: false,
                            // rotateX: 10,
                            // rotateY: 10
                        }

                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 200,
                    },
                    opacity: {
                        value: 0.3,
                    },
                    shape: {
                        type: "circle"
                    },
                    size: {
                        value: { min: 1, max: 1.2 },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};
export default Particle
import {
    HeartPulse, Heart, Activity, Stethoscope, Pill, Syringe,Truck,
    Thermometer, Shield, ShieldCheck,
    FlaskConical, FlaskRound, Beaker, TestTube, Microscope,
    Dna, Atom, Pipette, Droplet, Zap,
    Eye, EyeOff, Fingerprint, Brain,
    Dumbbell, Bike, Timer, Ruler,
    Leaf, Trees, Flower, Flower2, Sprout,
    Sun, Moon, Cloud, CloudRain, CloudSun, CloudMoon,
    CloudSnow, CloudLightning, Wind, Snowflake,
    Mountain, Waves, Sunset, Rainbow, Tornado, Haze,
    Dog, Cat, Bird, Fish, Bug, Rabbit, Turtle,
    Apple, Banana, Cherry, Grape,
    Salad, Coffee, Pizza, Sandwich,
    Cake, Cookie, IceCream, Beer, Wine,BatteryFull,
    Menu,
    Flame,
    BicepsFlexed,
    PillBottle,
    ChevronRight,
    X
} from "lucide-react";

export type IconName = keyof typeof iconMap;

export const healthIcons = {
    batteryFull:BatteryFull,
    heartPulse: HeartPulse,
    heart: Heart,
    stethoscope: Stethoscope,
    pill: Pill,
    syringe: Syringe,
    thermometer: Thermometer,
    shield: Shield,
    shieldCheck: ShieldCheck,
};

export const chemistryIcons = {
    flaskConical: FlaskConical,
    flaskRound: FlaskRound,
    beaker: Beaker,
    testTube: TestTube,
    microscope: Microscope,
    atom: Atom,
    pipette: Pipette,
};

export const bodyIcons = {
    eye: Eye,
    eyeOff: EyeOff,
    fingerprint: Fingerprint,
    brain: Brain,
    dna: Dna,
};

export const fitnessIcons = {
    dumbbell: Dumbbell,
    activity: Activity,
    bike: Bike,
    timer: Timer,
    ruler: Ruler,
    zap: Zap,
    strong:BicepsFlexed,
    pillBottle:PillBottle
};

export const natureIcons = {
    leaf: Leaf,
    droplet: Droplet,
    trees: Trees,
    flower: Flower,
    flower2: Flower2,
    sprout: Sprout,
    sun: Sun,
    moon: Moon,
    cloud: Cloud,
    cloudRain: CloudRain,
    cloudSun: CloudSun,
    cloudMoon: CloudMoon,
    cloudSnow: CloudSnow,
    cloudLightning: CloudLightning,
    wind: Wind,
    snowflake: Snowflake,
    mountain: Mountain,
    waves: Waves,
    sunset: Sunset,
    rainbow: Rainbow,
    tornado: Tornado,
    haze: Haze,
    flame:Flame
};

export const animalIcons = {
    dog: Dog,
    cat: Cat,
    bird: Bird,
    fish: Fish,
    bug: Bug,
    rabbit: Rabbit,
    turtle: Turtle,
};

export const foodIcons = {
    apple: Apple,
    banana: Banana,
    cherry: Cherry,
    grape: Grape,
    salad: Salad,
    coffee: Coffee,
    pizza: Pizza,
    sandwich: Sandwich,
    cake: Cake,
    cookie: Cookie,
    iceCream: IceCream,
    beer: Beer,
    wine: Wine,
};

export const cartIcons = {
  truck:Truck,
  bar:Menu,
 chevronRight:ChevronRight, 
 close:X
};

export const iconMap = {
    ...healthIcons,
    ...chemistryIcons,
    ...bodyIcons,
    ...fitnessIcons,
    ...natureIcons,
    ...animalIcons,
    ...foodIcons,
    ...cartIcons
};
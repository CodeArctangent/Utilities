class Autle {
    static clamp(val, min, max) {
        return Math.max(min, Math.min(val, max));
    }

    static randomRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    static randomItem(arr) {
        return arr[~Autle.randomRange(0, arr.length - 1)]
    }

    static lerp(stt, end, fac) {
        return stt * (1 - fac) + end * fac;;
    }

    static toDegrees(rad) {
        return (180 / Math.PI) * rad;
    }

    static toRadians(deg) {
        return (Math.PI / 180) * deg;
    }
}
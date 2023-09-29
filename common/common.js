const JHMath = () => {
    // 최대 공약수
    const getGCD =  (a, b) => {
        if (b === 0) {
            return a;
        } else {
            return getGCD(b, a % b);
        }
    }

    return { getGCD }
}
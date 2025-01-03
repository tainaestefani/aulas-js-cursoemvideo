let valores = [6, 2, 4, 8]

for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

// Ou...

for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
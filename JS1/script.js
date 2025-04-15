function tabuada(){
    for(let i = 1; i<=10;i++){
        document.write("<table border='1'>\n" +
                        "<thead>\n" +
                            "<tr>\n" +
                                `<th colspan='2'>Produtos de ${i}</th>\n` +
                            "</tr>"+
                        "</thead>"+
                        "<tbody>\n"+
                        "<tr>\n" +
                                `<td>${i}x1</td>\n` +
                                `<td>${i}</td>\n` +
                        "</tr>\n"+
                        "<tr>\n" +
                            `<td>${i}x2</td>\n` +
                            `<td>${i*2}</td>\n` +
                        "</tr>\n"+
                        "<tr>\n" +
                            `<td>${i}x3</td>\n` +
                            `<td>${i*3}</td>\n` +
                        "</tr>\n"+
                        "<tr>\n" +
                            `<td>${i}x4</td>\n` +
                            `<td>${i*4}</td>\n` +
                        "</tr>\n"+
                        "<tr>\n" +
                            `<td>${i}x5</td>\n` +
                            `<td>${i*5}</td>\n` +
                        "</tr>\n"+
                        "<tr>\n" +
                            `<td>${i}x6</td>\n` +
                            `<td>${i*6}</td>\n` +
                        "</tr>\n"+
                        "<tr>\n" +
                            `<td>${i}x7</td>\n` +
                            `<td>${i*7}</td>\n` +
                        "</tr>\n"+
                        "<tr>\n" +
                            `<td>${i}x8</td>\n` +
                            `<td>${i*8}</td>\n` +
                        "</tr>\n"+
                        "<tr>\n" +
                            `<td>${i}x9</td>\n` +
                            `<td>${i*9}</td>\n` +
                        "</tr>\n"+
                        "<tr>\n" +
                            `<td>${i}x10</td>\n` +
                            `<td>${i*10}</td>\n` +
                        "</tr>\n"+
                        "</tbody>\n"+
                        "</table>"
        )

    }
}

tabuada();
let pilotos = [
    
    {
        imagem: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png",
        titulo: "Charles Leclerc",
        descricao: "Charles Leclerc é um piloto talentoso da Ferrari, conhecido por sua velocidade e habilidade em classificações. Ele é considerado um dos melhores jovens pilotos da Fórmula 1.",
        equipe: "Ferrari",
        link: "https://pt.wikipedia.org/wiki/Charles_Leclerc",
        tags: "ferrari, mônaco"
    },
    {
        imagem: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/C/CARSAI01_Carlos_Sainz/carsai01.png",
        titulo: "Carlos Sainz",
        descricao: "Carlos Sainz é um piloto espanhol que compete pela Ferrari. Ele é elogiado por sua consistência e estratégia em corrida, além de ser um dos mais experientes do grid.",
        equipe: "Ferrari",
        link: "https://pt.wikipedia.org/wiki/Carlos_Sainz_Jr.",
        tags: "ferrari, espanha"
    },
    {
        imagem: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LANNOR01_Lando_Norris/lannor01.png",
        titulo: "Lando Norris",
        descricao: "Lando Norris é um dos pilotos mais carismáticos da Fórmula 1. Competindo pela McLaren, ele conquistou fãs pelo seu estilo de corrida agressivo e seu senso de humor fora das pistas.",
        equipe: "McLaren",
        link: "https://pt.wikipedia.org/wiki/Lando_Norris",
        tags: "mclaren, inglaterra, reino unido, grã bretanha"
    },
    
    {
        imagem: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/O/OSCPIA01_Oscar_Piastri/oscpia01.png",
        titulo: "Oscar Piastri",
        descricao: "Oscar Piastri é um jovem talento australiano que faz sua estreia na Fórmula 1 pela McLaren. Campeão da Fórmula 2, ele é visto como uma das grandes promessas da próxima geração.",
        equipe: "McLaren",
        tags: "mclaren, austrália"
    },
    {
        imagem: "https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/drivers/2024Drivers/verstappen",
        titulo: "Max Verstappen",
        descricao: "Max Verstappen é o atual campeão mundial da Fórmula 1, conhecido por sua agressividade nas pistas e talento natural. Ele dominou as temporadas recentes, consolidando-se como um dos maiores pilotos da história.",
        equipe: "Red Bull Racing",
        link: "https://pt.wikipedia.org/wiki/Max_Verstappen",
        tags: "red bull racing, holanda,campeão"

    },
    {
        imagem: "https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/drivers/2024Drivers/perez",
        titulo: "Sergio Perez",
        descricao: "Sergio Perez, também conhecido como 'Checo', é um piloto mexicano de Fórmula 1. Conhecido por sua habilidade em preservar pneus e realizar ultrapassagens, ele é um dos pilotos mais consistentes do grid.",
        equipe: "Red Bull Racing",
        link: "https://pt.wikipedia.org/wiki/Sergio_P%C3%A9rez",
        tags: "red bull racing, méxico"

    },
    {
        imagem: 'https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/drivers/2024Drivers/hamilton',
        titulo: "Lewis Hamilton",
        descricao: "Lewis Hamilton é um dos pilotos mais vitoriosos da Fórmula 1, com sete títulos mundiais. Seu talento e ativismo fora das pistas o tornaram uma figura influente no esporte e na sociedade.",
        equipe: "Mercedes",
        link: "https://pt.wikipedia.org/wiki/Lewis_Hamilton",
        tags: "mercedes, inglaterra,campeão"

    },
    {
        imagem: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png",
        titulo: "George Russell",
        descricao: "George Russell é um jovem piloto britânico que rapidamente se destacou na Fórmula 1. Agora correndo pela Mercedes, ele é considerado uma das grandes promessas do esporte.",
        equipe: "Mercedes",
        link: "https://pt.wikipedia.org/wiki/George_Russell_(piloto)",
        tags: "mercedes, inglaterra"

    },
    {
        imagem: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/F/FERALO01_Fernando_Alonso/feralo01.png",
        titulo: "Fernando Alonso",
        descricao: "Fernando Alonso é um dos pilotos mais experientes e bem-sucedidos da Fórmula 1. Com dois títulos mundiais, ele agora compete pela Aston Martin e continua a mostrar sua habilidade.",
        equipe: "Aston Martin",
        link: "https://pt.wikipedia.org/wiki/Fernando_Alonso",
        tags: "aston martin, ferrari, mclaren, campeão, espanha"

    },
    {
        imagem: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LANSTR01_Lance_Stroll/lanstr01.png",
        titulo: "Lance Stroll",
        descricao: "Lance Stroll é um piloto canadense que atualmente corre pela Aston Martin. Com várias temporadas de experiência, ele busca constantemente evoluir no esporte.",
        equipe: "Aston Martin",
        link: "https://pt.wikipedia.org/wiki/Lance_Stroll",
        tags: "aston martin, canadá"

    },
    {
        imagem: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/E/ESTOCO01_Esteban_Ocon/estoco01.png",
        titulo: "Esteban Ocon",
        descricao: "Esteban Ocon é um piloto francês da Alpine, conhecido por sua resiliência e performances consistentes. Ele já conquistou uma vitória na Fórmula 1 e busca se firmar como um dos melhores do grid.",
        equipe: "Alpine",
        link: "https://pt.wikipedia.org/wiki/Esteban_Ocon",
        tags: "alpine, frança"

    },
    {
        imagem: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/P/PIEGAS01_Pierre_Gasly/piegas01.png",
        titulo: "Pierre Gasly",
        descricao: "Pierre Gasly é um talentoso piloto francês que já venceu uma corrida de Fórmula 1. Competindo pela Alpine, ele é conhecido por seu talento e habilidade de lutar por posições.",
        equipe: "Alpine",
        link: "https://pt.wikipedia.org/wiki/Pierre_Gasly",
        tags: "alpine, frança"

    },
    {
        imagem: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/V/VALBOT01_Valtteri_Bottas/valbot01.png",
        titulo: "Valtteri Bottas",
        descricao: "Valtteri Bottas é um piloto finlandês que corre pela Alfa Romeo. Após anos competindo pela Mercedes, ele busca novas oportunidades e desafios em sua carreira.",
        equipe: "Alfa Romeo",
        link: "https://pt.wikipedia.org/wiki/Valtteri_Bottas",
        tags: "alpine, frança, mercdes, campeão"

    },
    {
        imagem: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/G/GUAZHO01_Guanyu_Zhou/guazho01.png",
        titulo: "Zhou Guanyu",
        descricao: "Zhou Guanyu é o primeiro piloto chinês a competir na Fórmula 1. Representando a Alfa Romeo, ele é uma nova promessa no esporte e um símbolo de inspiração para jovens pilotos.",
        equipe: "Alfa Romeo",
        link: "https://pt.wikipedia.org/wiki/Guanyu_Zhou",
        tags: "alfa romeo, china"

    },
    {
        imagem: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/K/KEVMAG01_Kevin_Magnussen/kevmag01.png",
        titulo: "Kevin Magnussen",
        descricao: "Kevin Magnussen é um piloto dinamarquês que corre pela Haas. Conhecido por sua combatividade e determinação, ele tem uma longa carreira na Fórmula 1.",
        equipe: "Haas",
        link: "https://pt.wikipedia.org/wiki/Kevin_Magnussen",
        tags: "haas, dinamarca"

    },
    {
        imagem: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/N/NICHUL01_Nico_Hulkenberg/nichul01.png",
        titulo: "Nico Hülkenberg",
        descricao: "Nico Hülkenberg é um piloto alemão que voltou à Fórmula 1 pela Haas. Experiente e versátil, ele busca bons resultados em seu retorno ao grid.",
        equipe: "Haas",
        link: "https://pt.wikipedia.org/wiki/Nico_H%C3%BClkenberg",
        tags: "haas, alemanha"
    },
    {
        imagem: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/Y/YUKTSU01_Yuki_Tsunoda/yuktsu01.png",
        titulo: "Yuki Tsunoda",
        descricao: "Yuki Tsunoda é um piloto japonês que compete pela AlphaTauri. Ele é conhecido por sua agressividade nas pistas e busca constantemente melhorar suas performances.",
        equipe: "AlphaTauri",
        link: "https://pt.wikipedia.org/wiki/Yuki_Tsunoda",
        tags: "alpha tauri, japão"
    },
    {
        imagem: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/D/DANRIC01_Daniel_Ricciardo/danric01.png",
        titulo: "Daniel Ricciardo",
        descricao: "Daniel Ricciardo é um piloto australiano que voltou à Fórmula 1 pela AlphaTauri. Conhecido por seu carisma e habilidade em ultrapassagens, ele é um dos pilotos mais populares do grid.",
        equipe: "AlphaTauri",
        link: "https://pt.wikipedia.org/wiki/Daniel_Ricciardo",
        tags: "alpha tauri,redbull, austrália"
    },
    {
        imagem: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/A/ALEALB01_Alexander_Albon/alealb01.png",
        titulo: "Alexander Albon",
        descricao: "Alexander Albon é um piloto tailandês que atualmente corre pela Williams. Ele já demonstrou talento e resiliência, e busca levar a Williams de volta ao topo.",
        equipe: "Williams",
        link: "https://pt.wikipedia.org/wiki/Alexander_Albon",
        tags: "williams, tailandia"
    },
    {
        imagem: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LOGSAR01_Logan_Sargeant/logsar01.png",
        titulo: "Logan Sargeant",
        descricao: "Logan Sargeant é um jovem piloto americano que estreou na Fórmula 1 pela Williams. Ele é considerado uma grande promessa do automobilismo norte-americano.",
        equipe: "Williams",
        link: "https://pt.wikipedia.org/wiki/Logan_Sargeant",
        tags: " williams, estados unidos"
    }
];

let lendas = [
    {
        imagem: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320,t_16by9Centre/fom-website/manual/Hall%20of%20Fame%202024/GettyImages-659224375",
        titulo: "Ayrton Senna",
        descricao: "Ayrton Senna é amplamente considerado um dos maiores pilotos de Fórmula 1 de todos os tempos. Conhecido por seu talento em pistas molhadas e sua busca incansável pela perfeição, Senna conquistou três títulos mundiais.",
        equipe: "McLaren",
        link: "https://pt.wikipedia.org/wiki/Ayrton_Senna",
        tags: ["McLaren", "Brasileiro"]
    },
    {
        imagem: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320,t_16by9Centre/fom-website/manual/Hall%20of%20Fame%202024/GettyImages-72220757",
        titulo: "Michael Schumacher",
        descricao: "Michael Schumacher é um dos pilotos mais vitoriosos da história da Fórmula 1, com sete títulos mundiais. Seu domínio nos anos 2000 com a Ferrari o transformou em uma lenda do esporte.",
        equipe: "Ferrari",
        link: "https://pt.wikipedia.org/wiki/Michael_Schumacher",
        tags: ["Ferrari", "Alemão"]
    },
    {
        imagem: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320,t_16by9North/fom-website/manual/Hall%20of%20Fame%202024/GettyImages-827612408",
        titulo: "Juan Manuel Fangio",
        descricao: "Juan Manuel Fangio, com cinco títulos mundiais, foi uma das primeiras lendas da Fórmula 1. Ele estabeleceu o padrão de excelência no esporte durante os anos 1950.",
        equipe: "Mercedes",
        link: "https://pt.wikipedia.org/wiki/Juan_Manuel_Fangio",
        tags: ["Mercedes", "Argentino"]
    },
    {
        imagem: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320,t_16by9Centre/fom-website/manual/Hall%20of%20Fame%202024/GettyImages-537112453",
        titulo: "Alain Prost",
        descricao: "Alain Prost, conhecido como 'O Professor', conquistou quatro títulos mundiais e foi famoso por sua abordagem cerebral às corridas, rivalizando com Ayrton Senna.",
        equipe: "McLaren",
        link: "https://pt.wikipedia.org/wiki/Alain_Prost",
        tags: ["McLaren", "Francês"]
    },
    {
        imagem: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320,t_16by9Centre/fom-website/manual/Hall%20of%20Fame%202024/GettyImages-525577811",
        titulo: "Niki Lauda",
        descricao: "Niki Lauda é uma lenda da Fórmula 1 com três títulos mundiais. Conhecido por sua incrível recuperação após um grave acidente em 1976, ele se tornou uma inspiração no esporte.",
        equipe: "Ferrari",
        link: "https://pt.wikipedia.org/wiki/Niki_Lauda",
        tags: ["Ferrari", "Austriaco"]
    },
    {
        imagem: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320,t_16by9South/fom-website/manual/Hall%20of%20Fame%202024/GettyImages-1443308803",
        titulo: "Jackie Stewart",
        descricao: "Jackie Stewart, tricampeão mundial, é conhecido tanto por seu talento nas pistas quanto por sua luta pela segurança na Fórmula 1. Ele revolucionou o esporte com sua abordagem.",
        equipe: "Tyrrell",
        link: "https://pt.wikipedia.org/wiki/Jackie_Stewart",
        tags: ["Tyrrell", "Escocês"]
    },
    {
        imagem: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320,t_16by9Centre/fom-website/manual/Hall%20of%20Fame%202024/GettyImages-1066217104",
        titulo: "Nelson Piquet",
        descricao: "Nelson Piquet, tricampeão mundial, foi um dos pilotos mais bem-sucedidos e calculistas da Fórmula 1, conhecido por sua capacidade de ajustar carros e vencer em qualquer condição.",
        equipe: "Brabham",
        link: "https://pt.wikipedia.org/wiki/Nelson_Piquet",
        tags: ["Brabham", "Brasileiro"]
    },
    {
        imagem: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320,t_16by9South/fom-website/manual/Hall%20of%20Fame%202024/GettyImages-827647160",
        titulo: "James Hunt",
        descricao: "James Hunt, campeão mundial de 1976, foi famoso por seu estilo de vida fora das pistas e por sua intensa rivalidade com Niki Lauda, que ficou eternizada na história do esporte.",
        equipe: "McLaren",
        link: "https://pt.wikipedia.org/wiki/James_Hunt",
        tags: ["McLaren", "Britânico"]
    },
    {
        imagem: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320,t_16by9Centre/fom-website/manual/Hall%20of%20Fame%202024/GettyImages-82801122",
        titulo: "Sebastian Vettel",
        descricao: "Sebastian Vettel é um tetracampeão mundial conhecido por seu domínio com a Red Bull Racing nos anos 2010. Ele é um dos pilotos mais bem-sucedidos da era moderna.",
        equipe: "Red Bull Racing",
        link: "https://pt.wikipedia.org/wiki/Sebastian_Vettel",
        tags: ["Red Bull Racing", "Alemão"]
    },
    {
        imagem: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320,t_16by9Centre/fom-website/manual/Hall%20of%20Fame%202024/GettyImages-1285771774",
        titulo: "Lewis Hamilton",
        descricao: "Lewis Hamilton, com sete títulos mundiais, é um dos maiores pilotos da história da Fórmula 1. Além de seu talento nas pistas, ele é conhecido por seu ativismo e busca por igualdade.",
        equipe: "Mercedes",
        link: "https://pt.wikipedia.org/wiki/Lewis_Hamilton",
        tags: ["Mercedes", "Britânico"]
    },
    {
        imagem: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320,t_16by9South/fom-website/manual/Hall%20of%20Fame%202024/GettyImages-1189103543",
        titulo: "Emerson Fittipaldi",
        descricao: "Emerson Fittipaldi foi o primeiro brasileiro a conquistar um título mundial de Fórmula 1, abrindo caminho para futuras gerações de pilotos no Brasil.",
        equipe: "Lotus",
        link: "https://pt.wikipedia.org/wiki/Emerson_Fittipaldi",
        tags: ["Lotus", "Brasileiro"]
    },
    {
        imagem: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320,t_16by9Centre/fom-website/manual/Hall%20of%20Fame%202024/GettyImages-864209082",
        titulo: "Graham Hill",
        descricao: "Graham Hill é o único piloto na história a conquistar a Tríplice Coroa do automobilismo, vencendo o GP de Mônaco, as 24 Horas de Le Mans e as 500 Milhas de Indianápolis.",
        equipe: "BRM",
        link: "https://pt.wikipedia.org/wiki/Graham_Hill",
        tags: ["BRM", "Britânico"]
    },
    {
        imagem: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320,t_16by9Centre/fom-website/manual/Hall%20of%20Fame%202024/GettyImages-865701928",
        titulo: "Nigel Mansell",
        descricao: "Nigel Mansell, campeão mundial em 1992, era conhecido por seu estilo de corrida agressivo e por seu carisma entre os fãs, sendo um dos pilotos mais populares da Fórmula 1.",
        equipe: "Williams",
        link: "https://pt.wikipedia.org/wiki/Nigel_Mansell",
        tags: ["Williams", "Britânico"]
    },
    {
        imagem: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320,t_16by9South/fom-website/manual/Hall%20of%20Fame%202024/GettyImages-2071874459",
        titulo: "Kimi Räikkönen",
        descricao: "Kimi Räikkönen, apelidado de 'Iceman', foi campeão mundial em 2007. Conhecido por sua frieza e humor peculiar, ele se tornou um dos pilotos mais queridos da Fórmula 1.",
        equipe: "Ferrari",
        link: "https://pt.wikipedia.org/wiki/Kimi_R%C3%A4ikk%C3%B6nen",
        tags: ["Ferrari", "Finlandês"]
    },
    {
        imagem: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320,t_16by9South/fom-website/manual/Hall%20of%20Fame%202024/GettyImages-647968497",
        titulo: "Mika Häkkinen",
        descricao: "Mika Häkkinen foi bicampeão mundial e é conhecido por sua feroz rivalidade com Michael Schumacher durante os anos 90, além de seu estilo de pilotagem rápido e calculado.",
        equipe: "McLaren",
        link: "https://pt.wikipedia.org/wiki/Mika_H%C3%A4kkinen",
        tags: ["McLaren", "Finlandês"]
    },
    {
        imagem: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320,t_16by9Centre/fom-website/manual/Hall%20of%20Fame%202024/GettyImages-868558648",
        titulo: "Damon Hill",
        descricao: "Damon Hill, filho de Graham Hill, conquistou o campeonato mundial em 1996. Ele é lembrado por sua habilidade em superar adversidades e pelo legado de sua família no esporte.",
        equipe: "Williams",
        link: "https://pt.wikipedia.org/wiki/Damon_Hill",
        tags: ["Williams", "Britânico"]
    },
    {   
        imagem: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320,t_16by9Centre/fom-website/manual/Hall%20of%20Fame%202024/GettyImages-91979303",
        titulo: "Jenson Button",
        descricao: "Jenson Button, campeão mundial de 2009, é conhecido por sua habilidade em condições mistas e por sua consistência ao longo de sua longa carreira na Fórmula 1.",
        equipe: "Brawn GP",
        link: "https://pt.wikipedia.org/wiki/Jenson_Button",
        tags: ["Brawn GP", "Britânico"]
    },
    {
        imagem: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320,t_16by9North/fom-website/manual/Hall%20of%20Fame%202024/GettyImages-3323162",
        titulo: "Jack Brabham",
        descricao: "Jack Brabham foi tricampeão mundial e o único piloto a vencer um campeonato de Fórmula 1 com um carro de sua própria equipe, a Brabham.",
        equipe: "Brabham",
        link: "https://pt.wikipedia.org/wiki/Jack_Brabham",
        tags: ["Brabham", "Australiano"]
    }
];

let grandesPremios = [
    {
        imagem: "https://image-service.zaonce.net/eyJidWNrZXQiOiJmcm9udGllci1jbXMiLCJrZXkiOiIyMDI0LTA2L2YxbTI0LWdwLW1vbi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjY0MH19fQ==",
        titulo: "Grande Prêmio de Mônaco",
        descricao: "O Grande Prêmio de Mônaco é o circuito mais famoso e glamoroso da Fórmula 1, realizado nas ruas estreitas de Monte Carlo. Conhecido pela dificuldade de ultrapassagem, vencer em Mônaco é considerado um dos maiores feitos para qualquer piloto.",
        pais: "Mônaco",
        maiorVencedor: "Ayrton Senna (6 vitórias)",
        link: "https://pt.wikipedia.org/wiki/Grande_Pr%C3%AAmio_de_M%C3%B4naco"
    },
    {
        imagem: "https://image-service.zaonce.net/eyJidWNrZXQiOiJmcm9udGllci1jbXMiLCJrZXkiOiIyMDI0LTA2L2YxbTI0LWdwLW1vei5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjY0MH19fQ==",
        titulo: "Grande Prêmio da Itália",
        descricao: "O Grande Prêmio da Itália é realizado no icônico circuito de Monza, também conhecido como o 'Templo da Velocidade'. É uma das corridas mais rápidas do calendário e um evento tradicional desde o início da Fórmula 1.",
        pais: "Itália",
        maiorVencedor: "Michael Schumacher (5 vitórias)",
        link: "https://pt.wikipedia.org/wiki/Grande_Pr%C3%AAmio_da_It%C3%A1lia"
    },
    {
        imagem: "https://image-service.zaonce.net/eyJidWNrZXQiOiJmcm9udGllci1jbXMiLCJrZXkiOiIyMDI0LTA2L2YxbTI0LWdwLWludC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjY0MH19fQ==",
        titulo: "Grande Prêmio do Brasil",
        descricao: "Realizado em Interlagos, São Paulo, o Grande Prêmio do Brasil é conhecido por produzir corridas emocionantes e decisivas no campeonato, com seu traçado desafiador e condições climáticas imprevisíveis.",
        pais: "Brasil",
        maiorVencedor: "Alain Prost (6 vitórias)",
        link: "https://pt.wikipedia.org/wiki/Grande_Pr%C3%AAmio_do_Brasil"
    },
    {
        imagem: "https://image-service.zaonce.net/eyJidWNrZXQiOiJmcm9udGllci1jbXMiLCJrZXkiOiIyMDI0LTA2L2YxbTI0LWdwLXNzdC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjY0MH19fQ==",
        titulo: "Grande Prêmio da Grã-Bretanha",
        descricao: "O Grande Prêmio da Grã-Bretanha, realizado no circuito de Silverstone, é um dos mais antigos da Fórmula 1. Com longas retas e curvas rápidas, Silverstone é uma pista favorita entre pilotos e fãs.",
        pais: "Reino Unido",
        maiorVencedor: "Lewis Hamilton (8 vitórias)",
        link: "https://pt.wikipedia.org/wiki/Grande_Pr%C3%AAmio_da_Gr%C3%A3-Bretanha"
    },
    {
        imagem: "https://image-service.zaonce.net/eyJidWNrZXQiOiJmcm9udGllci1jbXMiLCJrZXkiOiIyMDI0LTA2L2YxbTI0LWdwLXNwYS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjY0MH19fQ==",
        titulo: "Grande Prêmio da Bélgica",
        descricao: "O Grande Prêmio da Bélgica acontece no lendário circuito de Spa-Francorchamps. Com a famosa curva Eau Rouge e sua pista ondulada, Spa é considerado um dos maiores desafios técnicos da Fórmula 1.",
        pais: "Bélgica",
        maiorVencedor: "Michael Schumacher (6 vitórias)",
        link: "https://pt.wikipedia.org/wiki/Grande_Pr%C3%AAmio_da_B%C3%A9lgica"
    },
    {
        imagem: "https://image-service.zaonce.net/eyJidWNrZXQiOiJmcm9udGllci1jbXMiLCJrZXkiOiIyMDI0LTA2L2YxbTI0LWdwLXJici5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjY0MH19fQ==",
        titulo: "Grande Prêmio da França",
        descricao: "O Grande Prêmio da França é um dos eventos históricos da Fórmula 1, com corridas realizadas em diversos circuitos ao longo dos anos. Atualmente, a corrida é disputada no Circuito Paul Ricard.",
        pais: "França",
        maiorVencedor: "Michael Schumacher (8 vitórias)",
        link: "https://pt.wikipedia.org/wiki/Grande_Pr%C3%AAmio_da_Fran%C3%A7a"
    },
    {
        imagem: "https://image-service.zaonce.net/eyJidWNrZXQiOiJmcm9udGllci1jbXMiLCJrZXkiOiIyMDI0LTA2L2YxbTI0LWdwLW1pYW0uanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo2NDB9fX0=",
        titulo: "Grande Prêmio dos Estados Unidos",
        descricao: "O Grande Prêmio dos Estados Unidos é realizado no Circuito das Américas, no Texas. Conhecido por sua mistura de curvas desafiadoras, ele se tornou um dos eventos mais populares do calendário moderno da Fórmula 1.",
        pais: "Estados Unidos",
        maiorVencedor: "Lewis Hamilton (6 vitórias)",
        link: "https://pt.wikipedia.org/wiki/Grande_Pr%C3%AAmio_dos_Estados_Unidos"
    },
    {
        imagem: "https://image-service.zaonce.net/eyJidWNrZXQiOiJmcm9udGllci1jbXMiLCJrZXkiOiIyMDI0LTA2L2YxbTI0LWdwLWd2LmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NjQwfX19",
        titulo: "Grande Prêmio do Canadá",
        descricao: "O Grande Prêmio do Canadá é realizado no Circuito Gilles Villeneuve, em Montreal. É conhecido por seu layout de alta velocidade e por produzir corridas imprevisíveis e emocionantes.",
        pais: "Canadá",
        maiorVencedor: "Michael Schumacher (7 vitórias)",
        link: "https://pt.wikipedia.org/wiki/Grande_Pr%C3%AAmio_do_Canad%C3%A1"
    },
    {
        imagem: "https://image-service.zaonce.net/eyJidWNrZXQiOiJmcm9udGllci1jbXMiLCJrZXkiOiIyMDI0LTA2L2YxbTI0LWdwLWFwcmsuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo2NDB9fX0=",
        titulo: "Grande Prêmio da Austrália",
        descricao: "O Grande Prêmio da Austrália abre tradicionalmente a temporada da Fórmula 1 no Circuito de Albert Park, em Melbourne. O evento é famoso por seu clima festivo e por ser um teste inicial para as equipes.",
        pais: "Austrália",
        maiorVencedor: "Michael Schumacher (4 vitórias)",
        link: "https://pt.wikipedia.org/wiki/Grande_Pr%C3%AAmio_da_Austr%C3%A1lia"
    },
    {
        imagem: "https://image-service.zaonce.net/eyJidWNrZXQiOiJmcm9udGllci1jbXMiLCJrZXkiOiIyMDI0LTA2L2YxbTI0LWdwLXN6a2EuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo2NDB9fX0=",
        titulo: "Grande Prêmio do Japão",
        descricao: "O Grande Prêmio do Japão acontece no circuito de Suzuka, um dos traçados mais desafiadores e técnicos da Fórmula 1. É conhecido por suas curvas icônicas e corridas decisivas no final da temporada.",
        pais: "Japão",
        maiorVencedor: "Michael Schumacher (6 vitórias)",
        link: "https://pt.wikipedia.org/wiki/Grande_Pr%C3%AAmio_do_Jap%C3%A3o"
    },
    {
        imagem: "https://image-service.zaonce.net/eyJidWNrZXQiOiJmcm9udGllci1jbXMiLCJrZXkiOiIyMDI0LTA2L2YxbTI0LWdwLWh1bi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjY0MH19fQ==",
        titulo: "Grande Prêmio da Hungria",
        descricao: "O Grande Prêmio da Hungria é realizado no Hungaroring, um circuito estreito e travado que proporciona corridas onde a estratégia e a habilidade do piloto são cruciais para o sucesso.",
        pais: "Hungria",
        maiorVencedor: "Lewis Hamilton (8 vitórias)",
        link: "https://pt.wikipedia.org/wiki/Grande_Pr%C3%AAmio_da_Hungria"
    },
    {
        imagem: "https://image-service.zaonce.net/eyJidWNrZXQiOiJmcm9udGllci1jbXMiLCJrZXkiOiIyMDI0LTA2L2YxbTI0LWdwLW1iYXkuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo2NDB9fX0=",
        titulo: "Grande Prêmio de Singapura",
        descricao: "O Grande Prêmio de Singapura é a primeira corrida noturna da Fórmula 1, realizada nas ruas iluminadas de Marina Bay. É uma das corridas mais desafiadoras fisicamente devido ao calor e à umidade.",
        pais: "Singapura",
        maiorVencedor: "Sebastian Vettel (5 vitórias)",
        link: "https://pt.wikipedia.org/wiki/Grande_Pr%C3%AAmio_de_Singapura"
    },
    {
        imagem: "https://image-service.zaonce.net/eyJidWNrZXQiOiJmcm9udGllci1jbXMiLCJrZXkiOiIyMDI0LTA2L2YxbTI0LWdwLWJhaC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjY0MH19fQ==",
        titulo: "Grande Prêmio do Bahrein",
        descricao: "O Grande Prêmio do Bahrein é realizado no Circuito Internacional do Bahrein, sendo uma das primeiras corridas noturnas do calendário. É conhecido por seu traçado técnico e corridas emocionantes.",
        pais: "Bahrein",
        maiorVencedor: "Lewis Hamilton (5 vitórias)",
        link: "https://pt.wikipedia.org/wiki/Grande_Pr%C3%AAmio_do_Bahrein"
    },
    {
        imagem: "https://image-service.zaonce.net/eyJidWNrZXQiOiJmcm9udGllci1jbXMiLCJrZXkiOiIyMDI0LTA2L2YxbTI0LWdwLWhyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NjQwfX19",
        titulo: "Grande Prêmio do México",
        descricao: "O Grande Prêmio do México acontece no Autódromo Hermanos Rodríguez, na Cidade do México. A atmosfera elétrica dos fãs e a altitude elevada tornam este evento único no calendário.",
        pais: "México",
        maiorVencedor: "Max Verstappen (4 vitórias)",
        link: "https://pt.wikipedia.org/wiki/Grande_Pr%C3%AAmio_do_M%C3%A9xico"
    },
    {
        imagem: "https://image-service.zaonce.net/eyJidWNrZXQiOiJmcm9udGllci1jbXMiLCJrZXkiOiIyMDI0LTA2L2YxbTI0LWdwLXNoYWkuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo2NDB9fX0=",
        titulo: "Grande Prêmio da China",
        descricao: "O Grande Prêmio da China é realizado no Circuito Internacional de Xangai. Desde sua estreia, o evento se tornou uma das corridas mais importantes da expansão da Fórmula 1 na Ásia.",
        pais: "China",
        maiorVencedor: "Lewis Hamilton (6 vitórias)",
        link: "https://pt.wikipedia.org/wiki/Grande_Pr%C3%AAmio_da_China"
    },
    {
        imagem: "https://image-service.zaonce.net/eyJidWNrZXQiOiJmcm9udGllci1jbXMiLCJrZXkiOiIyMDI0LTA2L2YxbTI0LWdwLWJhcmMuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo2NDB9fX0=",
        titulo: "Grande Prêmio da Espanha",
        descricao: "O Grande Prêmio da Espanha é disputado no Circuito de Barcelona-Catalunha. Tradicionalmente uma pista de testes para as equipes, ela desafia pilotos com seu traçado técnico.",
        pais: "Espanha",
        maiorVencedor: "Michael Schumacher (6 vitórias)",
        link: "https://pt.wikipedia.org/wiki/Grande_Pr%C3%AAmio_da_Espanha"
    },
    {
        imagem: "https://image-service.zaonce.net/eyJidWNrZXQiOiJmcm9udGllci1jbXMiLCJrZXkiOiIyMDI0LTA2L2YxbTI0LWdwLXp2cnQuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo2NDB9fX0=",
        titulo: "Grande Prêmio dos Países Baixos",
        descricao: "O Grande Prêmio dos Países Baixos voltou recentemente ao calendário da Fórmula 1 no Circuito de Zandvoort, trazendo de volta um evento clássico com curvas desafiadoras e fãs apaixonados.",
        pais: "Países Baixos",
        maiorVencedor: "Jim Clark (4 vitórias)",
        link: "https://pt.wikipedia.org/wiki/Grande_Pr%C3%AAmio_dos_Pa%C3%ADses_Baixos"
    },
    {
        imagem: "https://image-service.zaonce.net/eyJidWNrZXQiOiJmcm9udGllci1jbXMiLCJrZXkiOiIyMDI0LTA2L2YxbTI0LWdwLXlhcy5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjY0MH19fQ==",
        titulo: "Grande Prêmio de Abu Dhabi",
        descricao: "O Grande Prêmio de Abu Dhabi, realizado no Circuito de Yas Marina, encerra tradicionalmente a temporada de Fórmula 1. A corrida noturna proporciona um final espetacular ao campeonato.",
        pais: "Emirados Árabes Unidos",
        maiorVencedor: "Lewis Hamilton (5 vitórias)",
        link: "https://pt.wikipedia.org/wiki/Grande_Pr%C3%AAmio_de_Abu_Dhabi"
    }
];

let equipes = [
    {
        imagem: "https://media.formula1.com/image/upload/f_auto,c_limit,w_960,q_auto/t_16by9South/f_auto/q_auto/fom-website/teams/mercedes/GettyImages-1040810370",
        titulo: "Mercedes-AMG Petronas",
        descricao: "A Mercedes-AMG Petronas é uma das equipes mais dominantes da Fórmula 1 moderna, conhecida por sua inovação tecnológica e sucesso consistente nas últimas temporadas.",
        pais: "Alemanha",
        maiorVencedor: "Lewis Hamilton (7 títulos de pilotos)",
        link: "https://pt.wikipedia.org/wiki/Mercedes-AMG_Petronas_Formula_One_Team"
    },
    {
        imagem: "https://media.formula1.com/image/upload/f_auto,c_limit,w_960,q_auto/t_16by9Centre/f_auto/q_auto/fom-website/teams/redbull/GettyImages-873251954",
        titulo: "Red Bull Racing",
        descricao: "A Red Bull Racing é conhecida por seu desempenho impressionante e sua capacidade de desafiar as grandes equipes. Com um enfoque em inovação e desenvolvimento, tem sido uma força constante no esporte.",
        pais: "Áustria",
        maiorVencedor: "Sebastian Vettel (4 títulos de pilotos)",
        link: "https://pt.wikipedia.org/wiki/Red_Bull_Racing"
    },
    {
        imagem: "https://media.formula1.com/image/upload/f_auto,c_limit,w_960,q_auto/f_auto/q_auto/content/dam/fom-website/sutton/2019/AbuDhabi/Sunday/CM1_4408_2019120131114068",
        titulo: "Scuderia Ferrari",
        descricao: "A Scuderia Ferrari é a equipe mais icônica e histórica da Fórmula 1. Com uma rica tradição e vários campeonatos, a Ferrari continua a ser uma das equipes mais reconhecidas do esporte.",
        pais: "Itália",
        maiorVencedor: "Michael Schumacher (5 títulos de pilotos)",
        link: "https://pt.wikipedia.org/wiki/Scuderia_Ferrari"
    },
    {
        imagem: "https://media.formula1.com/image/upload/f_auto,c_limit,w_960,q_auto/t_16by9North/f_auto/q_auto/content/dam/fom-website/sutton/2022/EmiliaRomagna/Sunday/1393528086",
        titulo: "McLaren",
        descricao: "A McLaren é uma equipe tradicional com uma longa história de sucesso e inovação na Fórmula 1. Com vários campeonatos e uma forte presença no esporte, a McLaren é uma das equipes mais respeitadas.",
        pais: "Reino Unido",
        maiorVencedor: "Ayrton Senna (3 títulos de pilotos)",
        link: "https://pt.wikipedia.org/wiki/McLaren"
    },
    {
        imagem: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/content/dam/fom-website/manual/DriverAndTeamImages/2024/2065862959_16by9Centre",
        titulo: "Alpine",
        descricao: "A Alpine, anteriormente conhecida como Renault, é uma equipe com uma forte presença no esporte. Conhecida por sua inovação e desenvolvimento técnico, a Alpine busca o sucesso em cada temporada.",
        pais: "França",
        maiorVencedor: "Fernando Alonso (2 títulos de pilotos com Renault)",
        link: "https://pt.wikipedia.org/wiki/Alpine_F1_Team"
    },
    {
        imagem: "https://webp.gp.cdn.pxr.nl/news/2023/02/26/caaa6b9d2e6ca90834717a7f3e5190e8e7193d44.jpg?width=1200",
        titulo: "AlphaTauri",
        descricao: "A AlphaTauri, equipe irmã da Red Bull Racing, é conhecida por seu foco no desenvolvimento de novos talentos e inovação técnica. Tem sido um importante campo de testes para futuros campeões.",
        pais: "Áustria",
        maiorVencedor: "Pierre Gasly (1 vitória)",
        link: "https://pt.wikipedia.org/wiki/Scuderia_AlphaTauri"
    },
    {
        imagem: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/content/dam/fom-website/manual/DriverAndTeamImages/2024/2053204844_16by9Centre",
        titulo: "Aston Martin",
        descricao: "A Aston Martin entrou na Fórmula 1 com uma abordagem moderna e ambições de sucesso. A equipe é conhecida por seu design distinto e busca de excelência em pista.",
        pais: "Reino Unido",
        maiorVencedor: "N/A",
        link: "https://pt.wikipedia.org/wiki/Aston_Martin_F1_Team"
    },
    {
        imagem: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/content/dam/fom-website/manual/DriverAndTeamImages/2024/2068767588_16by9North",
        titulo: "Haas F1 Team",
        descricao: "A Haas é uma equipe americana que entrou na Fórmula 1 com uma abordagem prática e focada em resultados. Com uma parceria com a Ferrari, tem mostrado crescimento e competitividade.",
        pais: "Estados Unidos",
        maiorVencedor: "N/A",
        link: "https://pt.wikipedia.org/wiki/Haas_F1_Team"
    },
    {
        imagem: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/content/dam/fom-website/manual/DriverAndTeamImages/2024/2047992871_16by9North", 
        titulo: "Kick Sauber",
        descricao: "A Kick Sauber é uma equipe conhecida por seu desempenho consistente e contribuições significativas ao esporte. Fundada em 1993, a equipe tem uma longa história e uma base sólida na Fórmula 1.",
        pais: "Suíça",
        maiorVencedor: "Klaus Ludwig (2 títulos de pilotos)",
        link: "https://pt.wikipedia.org/wiki/Equipe_Sauber"
    },
    {
        imagem: "https://media.formula1.com/image/upload/f_auto,c_limit,w_960,q_auto/t_16by9South/f_auto/q_auto/content/dam/fom-website/sutton/2022/Brazil/Friday/1440800084",
        titulo: "Williams",
        descricao: "A Williams é uma equipe histórica com um legado significativo na Fórmula 1. Conhecida por suas contribuições técnicas e desenvolvimento de talentos, a Williams continua a ser uma equipe respeitada no esporte.",
        pais: "Reino Unido",
        maiorVencedor: "Alain Prost (4 títulos de pilotos)",
        link: "https://pt.wikipedia.org/wiki/Williams_F1"
    }
];


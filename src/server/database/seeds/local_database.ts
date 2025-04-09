interface IComponenteEletronico {
  nome: string;
  tipo: string;
  especificacoes: string;
  placa_associada?: string;
}

export const componentesEletronicos: IComponenteEletronico[] = [
  {
    nome: "Resistor 10KΩ",
    tipo: "Resistor",
    especificacoes: "Resistência: 10 kΩ, Tolerância: Geralmente 5% ou 1%",
  },
  {
    nome: "Capacitor 100nF",
    tipo: "Capacitor",
    especificacoes:
      "Capacitância: 100 nF (0.1 µF), Tensão: Varia (ex: 50V, 100V), Tipo: Cerâmico Multicamada",
  },
  {
    nome: "Transistor BC547",
    tipo: "Transistor",
    especificacoes:
      "Tipo: NPN, Corrente de Coletor Máxima: 100 mA, Tensão Coletor-Emissor Máxima: 45 V, Encapsulamento: TO-92",
  },
  {
    nome: "Diodo 1N4007",
    tipo: "Diodo",
    especificacoes:
      "Tipo: Retificador, Tensão Reversa de Pico Máxima: 1000 V, Corrente Direta Média Máxima: 1 A, Encapsulamento: DO-41",
  },
  {
    nome: "LED Azul 5mm",
    tipo: "LED",
    especificacoes:
      "Cor: Azul, Diâmetro: 5 mm, Tensão Direta Típica: 3.0-3.4 V, Corrente Direta Máxima: 20 mA",
  },
  {
    nome: "Microcontrolador ESP32",
    tipo: "Microcontrolador",
    especificacoes:
      "Arquitetura: Dual-core 32-bit LX6, Wi-Fi: 802.11 b/g/n, Bluetooth: v4.2 BR/EDR & BLE, Memória Flash: Varia (ex: 4MB, 8MB)",
  },
  {
    nome: "Regulador de Tensão LM7805",
    tipo: "Regulador de Tensão",
    especificacoes:
      "Tensão de Saída Fixa: 5 V, Corrente de Saída Máxima: 1 A, Encapsulamento: TO-220",
  },
  {
    nome: "Potenciômetro 10KΩ",
    tipo: "Potenciômetro",
    especificacoes:
      "Resistência Total: 10 kΩ, Tipo: Linear ou Logarítmico, Terminais: 3",
  },
  {
    nome: "Sensor de Temperatura LM35",
    tipo: "Sensor",
    especificacoes:
      "Tipo: Analógico, Faixa de Medição: -55°C a +150°C, Sensibilidade: 10 mV/°C",
  },
  {
    nome: "Display OLED 128x64",
    tipo: "Display",
    especificacoes:
      "Resolução: 128x64 pixels, Cor: Monocromático (geralmente branco ou azul), Interface: I2C ou SPI",
  },
  {
    nome: "Cristal Oscilador 16MHz",
    tipo: "Cristal",
    especificacoes:
      "Frequência: 16 MHz, Tolerância de Frequência: Varia (ex: ±20 ppm), Tipo de Encapsulamento: Varia",
  },
  {
    nome: "Indutor 100µH",
    tipo: "Indutor",
    especificacoes:
      "Indutância: 100 µH, Corrente Máxima: Varia, Tipo: Núcleo de ferrite ou ar",
  },
  {
    nome: "Placa Wi-Fi ESP8266",
    tipo: "Placa",
    especificacoes:
      "Chipset: ESP8266, Wi-Fi: 802.11 b/g/n, GPIOs: Vários, Modos de Operação: STA/AP",
  },
  {
    nome: "Conversor DC-DC Step Down",
    tipo: "Conversor DC-DC",
    especificacoes:
      "Tipo: Buck, Tensão de Entrada: Varia (ex: 12V), Tensão de Saída: Ajustável ou fixa (ex: 5V), Corrente Máxima de Saída: Varia",
  },
  {
    nome: "Amplificador Operacional LM358",
    tipo: "Amplificador Operacional",
    especificacoes:
      "Número de Amplificadores: 2, Tipo: Baixo consumo, Largura de Banda de Ganho Unitário: ~1 MHz, Encapsulamento: DIP-8",
  },
  {
    nome: "Relé 5V 10A",
    tipo: "Relé",
    especificacoes:
      "Tensão da Bobina: 5 V DC, Corrente Máxima de Contato: 10 A, Tensão Máxima de Contato: Varia (AC/DC)",
  },
  {
    nome: "Fonte Chaveada 12V 2A",
    tipo: "Fonte",
    especificacoes:
      "Tensão de Entrada: Varia (AC 100-240V), Tensão de Saída: 12 V DC, Corrente de Saída Máxima: 2 A, Potência Máxima: 24 W",
  },
  {
    nome: "Sensor de Umidade DHT22",
    tipo: "Sensor",
    especificacoes:
      "Tipo: Digital, Faixa de Temperatura: -40°C a +80°C, Precisão de Temperatura: ±0.5°C, Faixa de Umidade: 0-100% RH, Precisão de Umidade: ±2-5% RH",
  },
  {
    nome: "CIs Lógico 74HC595",
    tipo: "CI Lógico",
    especificacoes:
      "Tipo: Shift Register (Registrador de Deslocamento), Bits: 8, Tipo de Saída: Paralela, Encapsulamento: DIP-16",
  },
  {
    nome: "Buzzer Piezoelétrico",
    tipo: "Buzzer",
    especificacoes:
      "Tipo: Ativo ou Passivo, Tensão de Operação: Varia (ex: 3-24V), Frequência de Ressonância: Varia",
  },
  {
    nome: "Chave Táctil 6x6mm",
    tipo: "Chave",
    especificacoes:
      "Dimensões: 6x6 mm, Altura: Varia, Tipo de Operação: Momentâneo",
  },
  {
    nome: "Módulo Bluetooth HC-05",
    tipo: "Módulo",
    especificacoes:
      "Padrão Bluetooth: 2.0 + EDR, Modos de Operação: Master/Slave, Interface de Comunicação: Serial (UART)",
  },
  {
    nome: "Ponte H L298N",
    tipo: "Ponte H",
    especificacoes:
      "Canais: 2, Corrente Contínua Máxima por Canal: 2 A, Tensão de Operação do Motor: Até 46 V",
  },
  {
    nome: "Sensor Ultrassônico HC-SR04",
    tipo: "Sensor",
    especificacoes:
      "Faixa de Medição: 2 cm a 400 cm, Ângulo de Medição: 15 graus, Tensão de Operação: 5 V",
  },
  {
    nome: "Conversor USB-TTL CP2102",
    tipo: "Conversor",
    especificacoes:
      "Chipset: CP2102, Interface de Entrada: USB, Interface de Saída: TTL Serial (RX, TX, GND, VCC)",
  },
  {
    nome: "Eletrolítico 470µF 16V",
    tipo: "Capacitor",
    especificacoes:
      "Capacitância: 470 µF, Tensão Máxima: 16 V, Tolerância: Varia (ex: ±20%), Tipo: Eletrolítico de Alumínio",
  },
  {
    nome: "Sensor de Luz LDR",
    tipo: "Sensor",
    especificacoes:
      "Tipo: Resistivo, Resistência na Luz: Varia (ex: poucos KΩ), Resistência no Escuro: Varia (ex: muitos MΩ)",
  },
  {
    nome: "MOSFET IRFZ44N",
    tipo: "Transistor",
    especificacoes:
      "Tipo: N-Channel, Tensão Dreno-Source Máxima: 55 V, Corrente de Dreno Contínua Máxima: 49 A, Resistência Drain-Source On (Rds(on)): Baixa",
  },
  {
    nome: "Sensor de Corrente ACS712",
    tipo: "Sensor",
    especificacoes:
      "Tipo: Efeito Hall, Faixa de Corrente: Varia (ex: ±5A, ±20A, ±30A), Sensibilidade: Varia (mV/A)",
  },
  {
    nome: "Display LCD 16x2 I2C",
    tipo: "Display",
    especificacoes:
      "Resolução: 16 caracteres x 2 linhas, Interface: I2C, Controlador: HD44780 (compatível)",
  },
  {
    nome: "Resistor de Precisão 1% 1KΩ",
    tipo: "Resistor",
    especificacoes: "Resistência: 1 kΩ, Tolerância: 1%",
  },
  {
    nome: "Módulo GPS NEO-6M",
    tipo: "Módulo",
    especificacoes:
      "Chipset: u-blox NEO-6M, Canais: 50, Taxa de Atualização: Varia, Interface: Serial (UART)",
  },
  {
    nome: "Acoplador Óptico PC817",
    tipo: "Acoplador Óptico",
    especificacoes:
      "Canais: 1, Tensão de Isolação: Varia, CTR (Current Transfer Ratio): Varia",
  },
  {
    nome: "Memória EEPROM 24C256",
    tipo: "Memória",
    especificacoes: "Capacidade: 256 Kbits (32 KB), Interface: I2C",
  },
  {
    nome: "Encoder Rotativo KY-040",
    tipo: "Encoder",
    especificacoes:
      "Tipo: Incremental, Pulsos por Rotação: 20, Saídas: A, B, SW (Botão)",
  },
  {
    nome: "Bateria Li-Ion 18650",
    tipo: "Bateria",
    especificacoes:
      "Tipo: Íon de Lítio, Formato: 18650, Tensão Nominal: 3.7 V, Capacidade: Varia (ex: 2000-3500 mAh)",
  },
  {
    nome: "Módulo RFID RC522",
    tipo: "Módulo",
    especificacoes:
      "Chipset: MFRC522, Frequência de Operação: 13.56 MHz, Interface: SPI",
  },
  {
    nome: "Diodo Zener 5.1V",
    tipo: "Diodo",
    especificacoes:
      "Tensão Zener (Vz): 5.1 V, Potência Dissipada: Varia (ex: 500 mW)",
  },
  {
    nome: "Triac BT136",
    tipo: "Triac",
    especificacoes:
      "Tensão de Bloqueio Repetitivo de Pico: Varia (ex: 400V, 600V), Corrente RMS On-State: Varia (ex: 4A)",
  },
  {
    nome: "Fonte Step-Up XL6009",
    tipo: "Fonte",
    especificacoes:
      "Tipo: Boost, Tensão de Entrada: Varia, Tensão de Saída: Ajustável, Corrente Máxima de Saída: Varia",
  },
  {
    nome: "Ponte Retificadora DB107",
    tipo: "Ponte Retificadora",
    especificacoes:
      "Tensão Reversa de Pico Máxima: 1000 V, Corrente Direta Média Máxima: 1 A",
  },
  {
    nome: "Placa Sensor de Chama",
    tipo: "Placa",
    especificacoes:
      "Tipo de Sensor: IR, Sensibilidade Ajustável, Saída: Digital (DO) e Analógica (AO)",
  },
  {
    nome: "Sensor de Pressão BMP280",
    tipo: "Sensor",
    especificacoes:
      "Tipo: Barométrico e Temperatura, Faixa de Pressão: 300-1100 hPa, Precisão de Pressão: ±1 hPa, Faixa de Temperatura: -40°C a +85°C",
  },
  {
    nome: "RTC DS3231 (Relógio de Tempo Real)",
    tipo: "RTC",
    especificacoes: "Precisão: Alta, Interface: I2C, Possui Bateria de Backup",
  },
  {
    nome: "Microfone Eletrético",
    tipo: "Microfone",
    especificacoes:
      "Tipo: Condensador, Sensibilidade: Varia, Padrão Polar: Omnidirecional",
  },
  {
    nome: "Módulo Relé de Estado Sólido",
    tipo: "Módulo",
    especificacoes:
      "Tipo: SSR, Tensão de Entrada de Controle: Varia (ex: 3-32V DC), Tensão de Carga: Varia (ex: 24-380V AC), Corrente de Carga Máxima: Varia",
  },
  {
    nome: "Célula de Carga 5Kg",
    tipo: "Sensor",
    especificacoes:
      "Capacidade Máxima: 5 kg, Tipo: Strain Gauge, Necessita de Amplificador HX711",
  },
  {
    nome: "Sensor de Gás MQ-2",
    tipo: "Sensor",
    especificacoes:
      "Detecta: GLP, Butano, Propano, Metano, Álcool, Fumaça, Faixa de Detecção: Varia",
  },
  {
    nome: "Módulo PWM PCA9685",
    tipo: "Módulo",
    especificacoes: "Canais: 16, Resolução PWM: 12-bit, Interface: I2C",
  },
  {
    nome: "Sensor de Inclinação SW-520D",
    tipo: "Sensor",
    especificacoes:
      "Tipo: Chave de Mercúrio (sem mercúrio), Ângulo de Ativação: Varia",
  },
];

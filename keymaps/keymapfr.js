// These tables map the js keyboard keys to the spice equivalent
wdi.KeymapFR = function() {

    // regular keys with associated chars. The columns  means all the event flux to activate the key (i.e. [key up, key down])
    // all the js events associated to these keys should have a charKey associated
    var charmapFR = {};
    charmapFR['²']   = [[0x29, 0, 0, 0], [0xA9, 0, 0, 0]];
    charmapFR['&']   = [[0x2, 0, 0, 0], [0x82, 0, 0, 0]];
    charmapFR['1']   = [[0x2A, 0, 0, 0], [0x2, 0, 0, 0], [0x82, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapFR['é']   = [[0x3, 0, 0, 0], [0x83, 0, 0, 0]];
    charmapFR['2']   = [[0x2A, 0, 0, 0], [0x3, 0, 0, 0], [0x83, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapFR['~']   = [[0xE0, 0x38, 0, 0], [0x3, 0, 0, 0], [0x83, 0, 0, 0], [0xE0, 0xB8, 0, 0]];
    charmapFR['"']   = [[0x4, 0, 0, 0], [0x84, 0, 0, 0]];
    charmapFR['3']   = [[0x2A, 0, 0, 0], [0x4, 0, 0, 0], [0x84, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapFR['#']   = [[0xE0, 0x38, 0, 0], [0x4, 0, 0, 0], [0x84, 0, 0, 0], [0xE0, 0xB8, 0, 0]];
    charmapFR['\'']   = [[0x5, 0, 0, 0], [0x85, 0, 0, 0]];
    charmapFR['4']  = [[0x2A, 0, 0, 0], [0x5, 0, 0, 0], [0x85, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapFR['{']   = [[0xE0, 0x38, 0, 0], [0x5, 0, 0, 0], [0x85, 0, 0, 0], [0xE0, 0xB8, 0, 0]];
    charmapFR['(']   = [[0x6, 0, 0, 0], [0x86, 0, 0, 0]];
    charmapFR['5']   = [[0x2A, 0, 0, 0], [0x6, 0, 0, 0], [0x86, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapFR['[']   = [[0xE0, 0x38, 0, 0], [0x6, 0, 0, 0], [0x86, 0, 0, 0], [0xE0, 0xB8, 0, 0]];
    charmapFR['-']   = [[0x7, 0, 0, 0], [0x87, 0, 0, 0]];
    charmapFR['6']   = [[0x2A, 0, 0, 0], [0x7, 0, 0, 0], [0x87, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapFR['|']   = [[0xE0, 0x38, 0, 0], [0x7, 0, 0, 0], [0x87, 0, 0, 0], [0xE0, 0xB8, 0, 0]];
    charmapFR['è']   = [[0x8, 0, 0, 0], [0x88, 0, 0, 0]];
    charmapFR['7']   = [[0x2A, 0, 0, 0], [0x8, 0, 0, 0], [0x88, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapFR['`']   = [[0xE0, 0x38, 0, 0], [0x8, 0, 0, 0], [0x88, 0, 0, 0], [0xE0, 0xB8, 0, 0]];
    charmapFR['_']   = [[0x9, 0, 0, 0], [0x89, 0, 0, 0]];
    charmapFR['8']   = [[0x2A, 0, 0, 0], [0x9, 0, 0, 0], [0x89, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapFR['\\']  = [[0xE0, 0x38, 0, 0], [0x9, 0, 0, 0], [0x89, 0, 0, 0], [0xE0, 0xB8, 0, 0]];
    charmapFR['ç']   = [[0x0A, 0, 0, 0], [0x8A, 0, 0, 0]];
    charmapFR['9']   = [[0x2A, 0, 0, 0], [0x0A, 0, 0, 0], [0x8A, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapFR['^']   = [[0xE0, 0x38, 0, 0], [0xA, 0, 0, 0], [0x8A, 0, 0, 0], [0xE0, 0xB8, 0, 0]];
    charmapFR['à']   = [[0x0B, 0, 0, 0], [0x8B, 0, 0, 0]];
    charmapFR['0']   = [[0x2A, 0, 0, 0], [0x0B, 0, 0, 0], [0x8B, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapFR['@']   = [[0xE0, 0x38, 0, 0], [0xB, 0, 0, 0], [0x8B, 0, 0, 0], [0xE0, 0xB8, 0, 0]];
    charmapFR[')']   = [[0x0C, 0, 0, 0], [0x8C, 0, 0, 0]];
    charmapFR['°']   = [[0x2A, 0, 0, 0], [0x0C, 0, 0, 0], [0x8C, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapFR[']']   = [[0xE0, 0x38, 0, 0], [0xC, 0, 0, 0], [0x8C, 0, 0, 0], [0xE0, 0xB8, 0, 0]];
    charmapFR['=']   = [[0x0D, 0, 0, 0], [0x8D, 0, 0, 0]];
    charmapFR['+']   = [[0x2A, 0, 0, 0], [0x0D, 0, 0, 0], [0x8D, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapFR['}']   = [[0xE0, 0x38, 0, 0], [0xD, 0, 0, 0], [0x8D, 0, 0, 0], [0xE0, 0xB8, 0, 0]];
    charmapFR['a']   = [[0x10, 0, 0, 0], [0x90, 0, 0, 0]];
    charmapFR['A']   = [[0x2A, 0, 0, 0], [0x10, 0, 0, 0], [0x90, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapFR['z']   = [[0x11, 0, 0, 0], [0x91, 0, 0, 0]];
    charmapFR['Z']   = [[0x2A, 0, 0, 0], [0x11, 0, 0, 0], [0x91, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapFR['e']   = [[0x12, 0, 0, 0], [0x92, 0, 0, 0]];
    charmapFR['E']   = [[0x2A, 0, 0, 0], [0x12, 0, 0, 0], [0x92, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapFR['€']   = [[0xE0, 0x38, 0, 0], [0x12, 0, 0, 0], [0x92, 0, 0, 0], [0xE0, 0xB8, 0, 0]];
    charmapFR['r']   = [[0x13, 0, 0, 0], [0x93, 0, 0, 0]];
    charmapFR['R']   = [[0x2A, 0, 0, 0], [0x13, 0, 0, 0], [0x93, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapFR['t']   = [[0x14, 0, 0, 0], [0x94, 0, 0, 0]];
    charmapFR['T']   = [[0x2A, 0, 0, 0], [0x14, 0, 0, 0], [0x94, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapFR['y']   = [[0x15, 0, 0, 0], [0x95, 0, 0, 0]];
    charmapFR['Y']   = [[0x2A, 0, 0, 0], [0x15, 0, 0, 0], [0x95, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapFR['u']   = [[0x16, 0, 0, 0], [0x96, 0, 0, 0]];
    charmapFR['U']   = [[0x2A, 0, 0, 0], [0x16, 0, 0, 0], [0x96, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapFR['i']   = [[0x17, 0, 0, 0], [0x97, 0, 0, 0]];
    charmapFR['I']   = [[0x2A, 0, 0, 0], [0x17, 0, 0, 0], [0x97, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapFR['o']   = [[0x18, 0, 0, 0], [0x98, 0, 0, 0]];
    charmapFR['O']   = [[0x2A, 0, 0, 0], [0x18, 0, 0, 0], [0x98, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapFR['p']   = [[0x19, 0, 0, 0], [0x99, 0, 0, 0]];
    charmapFR['P']   = [[0x2A, 0, 0, 0], [0x19, 0, 0, 0], [0x99, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapFR['^']   = [[0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0x39, 0, 0, 0], [0xb9, 0, 0, 0]];
    charmapFR['â']   = [[0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0x10, 0, 0, 0], [0x90, 0, 0, 0]];
    charmapFR['ä']   = [[0x2A, 0, 0, 0], [0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0xAA, 0, 0, 0], [0x10, 0, 0, 0], [0x90, 0, 0, 0]];
    charmapFR['Â']   = [[0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0x2A, 0, 0, 0], [0x10, 0, 0, 0], [0x90, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapFR['Ä']   = [[0x2A, 0, 0, 0], [0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0x10, 0, 0, 0], [0x90, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapFR['ê']   = [[0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0x12, 0, 0, 0], [0x92, 0, 0, 0]];
    charmapFR['ë']   = [[0x2A, 0, 0, 0], [0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0xAA, 0, 0, 0], [0x12, 0, 0, 0], [0x92, 0, 0, 0]];
    charmapFR['Ê']   = [[0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0x2A, 0, 0, 0], [0x12, 0, 0, 0], [0x92, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapFR['Ë']   = [[0x2A, 0, 0, 0], [0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0x12, 0, 0, 0], [0x92, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapFR['î']   = [[0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0x17, 0, 0, 0], [0x97, 0, 0, 0]];
    charmapFR['ï']   = [[0x2A, 0, 0, 0], [0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0xAA, 0, 0, 0], [0x17, 0, 0, 0], [0x97, 0, 0, 0]];
    charmapFR['Î']   = [[0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0x2A, 0, 0, 0], [0x17, 0, 0, 0], [0x97, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapFR['Ï']   = [[0x2A, 0, 0, 0], [0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0x17, 0, 0, 0], [0x97, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapFR['ô']   = [[0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0x18, 0, 0, 0], [0x98, 0, 0, 0]];
    charmapFR['ö']   = [[0x2A, 0, 0, 0], [0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0xAA, 0, 0, 0], [0x18, 0, 0, 0], [0x98, 0, 0, 0]];
    charmapFR['Ô']   = [[0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0x2A, 0, 0, 0], [0x18, 0, 0, 0], [0x98, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapFR['Ö']   = [[0x2A, 0, 0, 0], [0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0x18, 0, 0, 0], [0x98, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapFR['û']   = [[0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0x16, 0, 0, 0], [0x96, 0, 0, 0]];
    charmapFR['ü']   = [[0x2A, 0, 0, 0], [0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0xAA, 0, 0, 0], [0x16, 0, 0, 0], [0x96, 0, 0, 0]];
    charmapFR['Û']   = [[0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0x2A, 0, 0, 0], [0x16, 0, 0, 0], [0x96, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapFR['Ü']   = [[0x2A, 0, 0, 0], [0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0x16, 0, 0, 0], [0x96, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapFR['$']   = [[0x1B, 0, 0, 0], [0x9B, 0, 0, 0]];
    charmapFR['£']   = [[0x2A, 0, 0, 0], [0x1B, 0, 0, 0], [0x9B, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapFR['¤']   = [[0xE0, 0x38, 0, 0], [0x1B, 0, 0, 0], [0x9B, 0, 0, 0], [0xE0, 0xB8, 0, 0]];
    charmapFR['q']   = [[0x1E, 0, 0, 0], [0x9E, 0, 0, 0]];
    charmapFR['Q']   = [[0x2A, 0, 0, 0], [0x1E, 0, 0, 0], [0x9E, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapFR['s']   = [[0x1F, 0, 0, 0], [0x9F, 0, 0, 0]];
    charmapFR['S']   = [[0x2A, 0, 0, 0], [0x1F, 0, 0, 0], [0x9F, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapFR['d']   = [[0x20, 0, 0, 0], [0xA0, 0, 0, 0]];
    charmapFR['D']   = [[0x2A, 0, 0, 0], [0x20, 0, 0, 0], [0xA0, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapFR['f']   = [[0x21, 0, 0, 0], [0xA1, 0, 0, 0]];
    charmapFR['F']   = [[0x2A, 0, 0, 0], [0x21, 0, 0, 0], [0xA1, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapFR['g']   = [[0x22, 0, 0, 0], [0xA2, 0, 0, 0]];
    charmapFR['G']   = [[0x2A, 0, 0, 0], [0x22, 0, 0, 0], [0xA2, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapFR['h']   = [[0x23, 0, 0, 0], [0xA3, 0, 0, 0]];
    charmapFR['H']   = [[0x2A, 0, 0, 0], [0x23, 0, 0, 0], [0xA3, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapFR['j']   = [[0x24, 0, 0, 0], [0xA4, 0, 0, 0]];
    charmapFR['J']   = [[0x2A, 0, 0, 0], [0x24, 0, 0, 0], [0xA4, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapFR['k']   = [[0x25, 0, 0, 0], [0xA5, 0, 0, 0]];
    charmapFR['K']   = [[0x2A, 0, 0, 0], [0x25, 0, 0, 0], [0xA5, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapFR['l']   = [[0x26, 0, 0, 0], [0xA6, 0, 0, 0]];
    charmapFR['L']   = [[0x2A, 0, 0, 0], [0x26, 0, 0, 0], [0xA6, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapFR['m']   = [[0x27, 0, 0, 0], [0xA7, 0, 0, 0]];
    charmapFR['M']   = [[0x2A, 0, 0, 0], [0x27, 0, 0, 0], [0xA7, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapFR['ù']   = [[0x28, 0, 0, 0], [0xA8, 0, 0, 0]];
    charmapFR['%']   = [[0x2A, 0, 0, 0], [0x28, 0, 0, 0], [0xA8, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapFR['*']   = [[0x2B, 0, 0, 0], [0xAB, 0, 0, 0]];
    charmapFR['µ']   = [[0x2A, 0, 0, 0], [0x2B, 0, 0, 0], [0xAB, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapFR['<']   = [[0x56, 0, 0, 0], [0xD6, 0, 0, 0]];
    charmapFR['>']   = [[0x2A, 0, 0, 0], [0x56, 0, 0, 0], [0xD6, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapFR['w']   = [[0x2C, 0, 0, 0], [0xAC, 0, 0, 0]];
    charmapFR['W']   = [[0x2A, 0, 0, 0], [0x2C, 0, 0, 0], [0xAC, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapFR['x']   = [[0x2D, 0, 0, 0], [0xAD, 0, 0, 0]];
    charmapFR['X']   = [[0x2A, 0, 0, 0], [0x2D, 0, 0, 0], [0xAD, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapFR['c']   = [[0x2E, 0, 0, 0], [0xAE, 0, 0, 0]];
    charmapFR['C']   = [[0x2A, 0, 0, 0], [0x2E, 0, 0, 0], [0xAE, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapFR['v']   = [[0x2F, 0, 0, 0], [0xAF, 0, 0, 0]];
    charmapFR['V']   = [[0x2A, 0, 0, 0], [0x2F, 0, 0, 0], [0xAF, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapFR['b']   = [[0x30, 0, 0, 0], [0xB0, 0, 0, 0]];
    charmapFR['B']   = [[0x2A, 0, 0, 0], [0x30, 0, 0, 0], [0xB0, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapFR['n']   = [[0x31, 0, 0, 0], [0xB1, 0, 0, 0]];
    charmapFR['N']   = [[0x2A, 0, 0, 0], [0x31, 0, 0, 0], [0xB1, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapFR[',']   = [[0x32, 0, 0, 0], [0xB2, 0, 0, 0]];
    charmapFR['?']   = [[0x2A, 0, 0, 0], [0x32, 0, 0, 0], [0xB2, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapFR[';']   = [[0x33, 0, 0, 0], [0xB3, 0, 0, 0]];
    charmapFR['.']   = [[0x2A, 0, 0, 0], [0x33, 0, 0, 0], [0xB3, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapFR[':']   = [[0x34, 0, 0, 0], [0xB4, 0, 0, 0]];
    charmapFR['/']   = [[0x2A, 0, 0, 0], [0x34, 0, 0, 0], [0xB4, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapFR['!']   = [[0x35, 0, 0, 0], [0xB5, 0, 0, 0]];
    charmapFR['§']   = [[0x2A, 0, 0, 0], [0x35, 0, 0, 0], [0xB5, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapFR[' ']   = [[0x39, 0, 0, 0], [0xb9, 0, 0, 0]];

    // keyboard keys without character associated.
    // all the js events associated to these keys should have a keyChar associated
    var keymapFR = [];

    keymapFR[27]                 = 0x1; // ESC
    keymapFR[9]                 = 0x0F; // TAB
    //keymapFR[20]                = 0x3A; // BLOQ.MAY. => see the charmap, all the capital letters and shift chars send a shift in their sequence
    keymapFR[16]                = 0x2A; // LEFT SHIFT and RIGHT SHIFT
    keymapFR[91]                = 0x15B; // LEFT GUI (META, COMMAND) BINDED TO CONTROL
    keymapFR[17]                = 0x1D; // LEFT CONTROL and RIGHT CONTROL
    //keymapFR[32]                = 0x39; // SPACE => see the charmap
    keymapFR[8]                 = 0x0E; // BACKSPACE
    keymapFR[13]                = 0x1C; // ENTER
    //keymapFR[225]                 = 0x38; // RIGHT ALT (ALT GR) => see the charmap, all the altgr chars send a altgr in their sequence
    keymapFR[18]                = 0x38; // LEFT ALT
  // keymapFR[92]                = 0x5C; // RIGHT GUI (WINDOWS)
    keymapFR[38]                = 0x48; // UP ARROW
    keymapFR[37]                = 0x4B; // LEFT ARROW
    keymapFR[40]                = 0x50; // DOWN ARROW
    keymapFR[39]                = 0x4D; // RIGHT ARROW
    keymapFR[45]                = 0x52; // INSERT
    keymapFR[46]                = 0x53; // DELETE
    keymapFR[36]                = 0x47; // HOME
    keymapFR[35]                = 0x4F; // FIN
    keymapFR[33]                = 0x49; // PAGE UP
    keymapFR[34]                = 0x51; // PAGE UP
    keymapFR[144]               = 0x45; // BLOQ.NUM.
    keymapFR[145]                = 0x46; // SCROLL LOCK
    keymapFR[112]                = 0x3B; // F1
    keymapFR[113]                = 0x3C; // F2
    keymapFR[114]                = 0x3D; // F3
    keymapFR[115]                = 0x3E; // F4
    keymapFR[116]                = 0x3F; // F5
    keymapFR[117]                = 0x40; // F6
    keymapFR[118]                = 0x41; // F7
    keymapFR[119]                = 0x42; // F8
    keymapFR[120]                = 0x43; // F9
    keymapFR[121]                = 0x44; // F10
    keymapFR[122]                = 0x57; // F11
    keymapFR[123]                = 0x58; // F12

    // combination keys with ctrl
    var ctrlKeymapFR = [];

    ctrlKeymapFR[81]                = 0x10; // q
    ctrlKeymapFR[87]                = 0x11; // z
    ctrlKeymapFR[69]                = 0x12; // e
    ctrlKeymapFR[82]                = 0x13; // r
    ctrlKeymapFR[84]                = 0x14; // t
    ctrlKeymapFR[89]                = 0x15; // y
    ctrlKeymapFR[85]                = 0x16; // u
    ctrlKeymapFR[73]                = 0x17; // i
    ctrlKeymapFR[79]                = 0x18; // o
    ctrlKeymapFR[80]                = 0x19; // p
    ctrlKeymapFR[65]                = 0x1E; // q
    ctrlKeymapFR[83]                = 0x1F; // s
    ctrlKeymapFR[68]                = 0x20; // d
    ctrlKeymapFR[70]                = 0x21; // f
    ctrlKeymapFR[71]                = 0x22; // g
    ctrlKeymapFR[72]                = 0x23; // h
    ctrlKeymapFR[74]                = 0x24; // j
    ctrlKeymapFR[75]                = 0x25; // k
    ctrlKeymapFR[76]                = 0x26; // l
    ctrlKeymapFR[77]                = 0x27; // m
    ctrlKeymapFR[90]                = 0x2C; // w
    ctrlKeymapFR[88]                = 0x2D; // x
    ctrlKeymapFR[67]                = 0x2E; // c
    //ctrlKeymapFR[86]                = 0x2F; // v      to enable set disableClipboard = true in run.js
    ctrlKeymapFR[66]                = 0x30; // b
    ctrlKeymapFR[78]                = 0x31; // n

    // reserved ctrl+? combinations we want to intercept from browser and inject manually to spice
    var reservedCtrlKeymap = [];
    reservedCtrlKeymap[86] = 0x2F;

    return {
        getKeymap: function() {
            return keymapFR;
        },

        getCtrlKeymap: function() {
            return ctrlKeymapFR;
        },

        getReservedCtrlKeymap: function() {
            return reservedCtrlKeymap;
        },

        getCharmap: function() {
            return charmapFR;
        },

        setCtrlKey: function (key, val) {
            ctrlKeymapFR[key] = val;
        }
    };
}( );

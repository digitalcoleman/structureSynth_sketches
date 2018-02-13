set maxdepth 13

17 * { ry 24 sat 0.9 } 10 * { ry 40 } 2 * { h 30 b 0.8 sat 0.8  } r1

rule r1 w 20 {
   { s 0.9 rz 12 h 5 rx 7 x 1 }  r1
   { s 1.1 0.3 0.8 } box
}

rule r1 w 30 {
   {  s 0.99 rz 11 h 5 rx -7 x 1 }   r1
   { s 1.4 0.2 0.6 } box
}

rule r1  {
}
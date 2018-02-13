/// The Nine Worthies
///  Syntopia 2009

set maxobjects 52200
set maxdepth 3000
set background #232
9 * { x 3 rz 40 }  1 * { b 0.4  color #0a0    color white } r1 
// { s 1000 1000 1 color white } box 

// Camera settings. Place these before first rule call.
set translation [-4.50383 -2.80381 -20]
set rotation [0.993991 0.0947988 -0.0545559 0.0140638 0.383866 0.923278 0.108471 -0.918504 0.380229]
set pivot [0 0 0]
set scale 0.209524

rule r1 w  10  {
  { rz 15 h 1    y 1  h 4  z 0.02 s 0.999  } r1 
   r2
}

rule r1 w 0.2 {
  { rx 8    z 0.2  s 0.99 } r1 
   r2
}

rule r2 {
  {s 1 1 1.5} box
}



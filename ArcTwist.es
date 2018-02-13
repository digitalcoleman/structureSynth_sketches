// Arc Sphere.es
// Inspired by Marius Watz spheres:
// http://www.flickr.com/photos/watz/363931023/

set maxobjects  1600
set background #454

// Camera settings. Place these before first rule call.
set translation [-3.33009 0.0259899 -20]
set rotation [0.147791 -0.237766 -0.960012 -0.822766 -0.568209 0.014066 -0.548833 0.787786 -0.279602]
set pivot [0 0 0]
set scale 0.18957

7 * { s 0.9 z -2 y 0.5   } 1 * {  color #5a5 s 0.92  rz 0  }  r1
7 * { s 0.9 z -2 y 0.5    } 1 * {  color #aaa  s 0.87   rz 0 }  r1
7 * { s 0.9 z -2 y 0.5   } 1 * {  color #fff }  r1

rule r1 w 40  {
  ubox
  dbox
  { x 8 ry 38 } r1 
}

rule r1  w 14 {  r2 }

rule r2 w 10 {  
  {x 8 ry 38 } r2
}

rule r2  {  r1 }

rule dbox w 8 maxdepth 35 {
   {s 0.94 y -2 rx 2.9 rz 4 } dbox
   sbox
}

rule dbox { }

rule ubox w 8  maxdepth 35 {
 {s 0.94 y 2 rx -2.9 rz -4 }  ubox
sbox
}

rule ubox { }

rule sbox   {
  { s 5  3 4  ry 6 }  box
}
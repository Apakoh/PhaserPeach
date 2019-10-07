keySpace.on('down', function(event)
{
  if((player.y - (player.height*0.2)/2) > 0)
  {
    for(i=0;i<jump_force;i++)
    {
      player.y -= 1;
    }
  }
});

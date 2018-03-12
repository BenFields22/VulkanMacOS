#version 400
#extension GL_ARB_separate_shader_objects  : enable
#extension GL_ARB_shading_language_420pack : enable

layout(binding = 1) uniform sampler2D uSampler;

layout ( location = 0 ) in vec3 vNormal;
layout ( location = 1 ) in vec3 vColor;
layout ( location = 2 ) in vec2 vTexCoord;
layout ( location = 3 ) in flat int vTex;

layout ( location = 0 ) out vec4 fFragColor;

void
main( )
{
    if( vTex == 0)
    {
        fFragColor = vec4( vColor, 1. );
    }
    else
    {
        fFragColor = vec4( texture( uSampler, vTexCoord ).rgb, 1. );
    }
    
}

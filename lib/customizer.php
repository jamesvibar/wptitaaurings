<?php
// Register settings
add_action( 'customize_register', 'mytheme_section' );

function mytheme_section($wp_customize) {
  $wp_customize->add_section('cd_colors', array(
    'title' => 'Colors',
    'priority' => 30,
  ));

  $wp_customize->add_setting( 'background_color', array(
    'type' => 'theme_mod',
    'default' => '#000000',
    'transport' => 'refresh',
  ));

  $wp_customize->add_control( new WP_Customize_Color_Control($wp_customize, 'background_color', array(
    'label' => 'Background Color',
    'section' => 'cd_colors',
    'settings' => 'background_color'
  )));
}
---
layout: post
mathjax: true
plyr: false
title: "Audio texture synthesis and style transfer"
author: Dmitry Ulyanov and Vadim Lebedev
excerpt_separator: <!--more-->
---

<p class="byline">
    by <i>Dmitry Ulyanov</i> and <i>Vadim Lebedev</i>
</p>
---


We present an extension of [texture synthesis](https://arxiv.org/abs/1505.07376) and [style transfer](https://arxiv.org/abs/1508.06576) method of Leon Gatys *et al.* for audio. We have developed the same code for three frameworks (well, it is cold in Moscow), choose your favorite:


<center>

<table width="360" cellspacing="0" cellpadding="0" style="text-align: center; vertical-align: middle;">
  <tr>
    <td width="120"></td>
    <td width="120"></td>
    <td width="120"></td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/DmitryUlyanov/neural-style-audio-torch" style="font-size: 12pt"><b>Torch</b></a>
    </td>
    <td>
      <a href="https://github.com/DmitryUlyanov/neural-style-audio-tf" style="font-size: 12pt"><b>TensorFlow</b></a>
    </td>
    <td>
      <a href="https://github.com/vadim-v-lebedev/audio_style_tranfer" style="font-size: 12pt"><b>Lasagne</b></a>
    </td>
  </tr>
</table>
</center>

<!--more-->

<!-- <table style="border:1px solid #AAAAAA;border-radius:3px;">
  <tr>
    <td style="text-align: center; vertical-align: middle; border: 1px solid #AAAAAA">
      Torch
    </td>
    <td style="text-align: center; vertical-align: middle; border: 1px solid #AAAAAA">
      TensorFlow
    </td>
    <td style="text-align: center; vertical-align: middle; border: 1px solid #AAAAAA">
      Theano (Lasagne)
    </td>
  </tr>
</table> -->

### How do you apply neural-style to audio?

The modifications of image style transfer algorithm are rather straightforward.

- The raw audio is converted to a spectrogram via [Short Time Fourier Transform](https://en.wikipedia.org/wiki/Short-time_Fourier_transform). Spectrogram is a 2D representation of a 1D signal so it can be treated (almost) as an image. In fact is better to think of spectrogram as of `1xT` image with `F` channels.  
- Next we need a network. We cannot just use VGG-19, since `3x3` convolutions are not suited for our essentially 1D problem, for which we for sure want to use 1D convolutions. Then there are two options: use a pretrained network or use completely random weights. In Torch implementation I tried to train different kind of nets, but they seem to perform similarly. As  [[1](https://arxiv.org/abs/1606.00021),[2](http://papers.nips.cc/paper/6568-a-powerful-generative-model-using-random-weights-for-the-deep-image-representation.pdf),[3](https://nucl.ai/blog/extreme-style-machines/)] Vadim also found that quality of the network is not important for texture synthesis. Random weights nets are implemented for all three frameworks. Interestingly, the network we use has only one layer with `4096` filters.
- And finally we need to reconstruct a signal from its spectrogram. The simplest way to do the inversion is to use [Griffin-Lim algorithm](http://ieeexplore.ieee.org/document/1164317/).

### Texture synthesis

By setting content weight to zero we can synthesize textures.

<center>


<table>
  <tr>
    <td style="text-align: center; vertical-align: middle;">Texture:</td>
    <td style="text-align: center; vertical-align: middle;">
      <audio controls>
      <source src="/assets/neural-style-audio/texture_synthesis/keyboard2.mp3">
      </audio>
    </td>
  </tr>
  <tr>
    <td style="text-align: center; vertical-align: middle;">Synthesized:</td>
     <td style="text-align: center; vertical-align: middle;"><audio controls>
       <source src="/assets/neural-style-audio/texture_synthesis/keyboard2.mp3.wav.mp3">
       </audio>
     </td>
  </tr>
</table>

<p/>
<table>
<tr>
<td style="text-align: center; vertical-align: middle;">Texture:</td>
<td style="text-align: center; vertical-align: middle;"><audio controls>
  <source src="/assets/neural-style-audio/texture_synthesis/tiger.mp3">
</audio></td>
</tr>
<tr>
<td style="text-align: center; vertical-align: middle;">Synthesized:</td>
<td style="text-align: center; vertical-align: middle;"><audio controls>
  <source src="/assets/neural-style-audio/texture_synthesis/tiger.mp3.wav.mp3">
</audio></td>
</tr>
</table>

<p/>
<table>
  <tr>
    <td style="text-align: center; vertical-align: middle;">Texture:</td>
    <td style="text-align: center; vertical-align: middle;">
      <audio controls>
      <source src="/assets/neural-style-audio/texture_synthesis/gun.mp3">
      </audio>
    </td>
  </tr>
  <tr>
    <td style="text-align: center; vertical-align: middle;">Synthesized:</td>
     <td style="text-align: center; vertical-align: middle;"><audio controls>
       <source src="/assets/neural-style-audio/texture_synthesis/gun.mp3.wav.mp3">
       </audio>
     </td>
  </tr>
</table>

<a href="javascript:look('div1');" title="More examples">More examples</a>
<div id="div1" style="display: none;">


<table>
<tr>
<td style="text-align: center; vertical-align: middle;">Texture:</td>
<td style="text-align: center; vertical-align: middle;"><audio controls>
  <source src="/assets/neural-style-audio/texture_synthesis/salut.mp3">
</audio></td>
</tr>
<tr>
<td style="text-align: center; vertical-align: middle;">Synthesized:</td>
<td style="text-align: center; vertical-align: middle;"><audio controls>
  <source src="/assets/neural-style-audio/texture_synthesis/salut.mp3.wav.mp3">
</audio></td>
</tr>
</table>


<p/>
<table>
  <tr>
    <td style="text-align: center; vertical-align: middle;">Texture:</td>
    <td style="text-align: center; vertical-align: middle;">
      <audio controls>
      <source src="/assets/neural-style-audio/texture_synthesis/champ.mp3">
      </audio>
    </td>
  </tr>
  <tr>
    <td style="text-align: center; vertical-align: middle;">Synthesized:</td>
     <td style="text-align: center; vertical-align: middle;"><audio controls>
       <source src="/assets/neural-style-audio/texture_synthesis/champ.mp3.wav.mp3">
       </audio>
     </td>
  </tr>
</table><p/>
<table>
  <tr>
    <td style="text-align: center; vertical-align: middle;">Texture:</td>
    <td style="text-align: center; vertical-align: middle;">
      <audio controls>
      <source src="/assets/neural-style-audio/texture_synthesis/clap.mp3">
      </audio>
    </td>
  </tr>
  <tr>
    <td style="text-align: center; vertical-align: middle;">Synthesized:</td>
     <td style="text-align: center; vertical-align: middle;"><audio controls>
       <source src="/assets/neural-style-audio/texture_synthesis/clap.mp3.wav.mp3">
       </audio>
     </td>
  </tr>
</table><p/>
<table>
  <tr>
    <td style="text-align: center; vertical-align: middle;">Texture:</td>
    <td style="text-align: center; vertical-align: middle;">
      <audio controls>
      <source src="/assets/neural-style-audio/texture_synthesis/cry.mp3">
      </audio>
    </td>
  </tr>
  <tr>
    <td style="text-align: center; vertical-align: middle;">Synthesized:</td>
     <td style="text-align: center; vertical-align: middle;"><audio controls>
       <source src="/assets/neural-style-audio/texture_synthesis/cry.mp3.wav.mp3">
       </audio>
     </td>
  </tr>
</table>
<p/>
<table>
  <tr>
    <td style="text-align: center; vertical-align: middle;">Texture:</td>
    <td style="text-align: center; vertical-align: middle;">
      <audio controls>
      <source src="/assets/neural-style-audio/texture_synthesis/gettysburg.mp3">
      </audio>
    </td>
  </tr>
  <tr>
    <td style="text-align: center; vertical-align: middle;">Synthesized:</td>
     <td style="text-align: center; vertical-align: middle;"><audio controls>
       <source src="/assets/neural-style-audio/texture_synthesis/gettysburg.mp3.wav.mp3">
       </audio>
     </td>
  </tr>
</table>
<p/>
<table>
  <tr>
    <td style="text-align: center; vertical-align: middle;">Texture:</td>
    <td style="text-align: center; vertical-align: middle;">
      <audio controls>
      <source src="/assets/neural-style-audio/texture_synthesis/deck.mp3">
      </audio>
    </td>
  </tr>
  <tr>
    <td style="text-align: center; vertical-align: middle;">Synthesized:</td>
     <td style="text-align: center; vertical-align: middle;"><audio controls>
       <source src="/assets/neural-style-audio/texture_synthesis/deck.mp3.wav.mp3">
       </audio>
     </td>
  </tr>
</table><p/>
<table>
  <tr>
    <td style="text-align: center; vertical-align: middle;">Texture:</td>
    <td style="text-align: center; vertical-align: middle;">
      <audio controls>
      <source src="/assets/neural-style-audio/texture_synthesis/explosion.mp3">
      </audio>
    </td>
  </tr>
  <tr>
    <td style="text-align: center; vertical-align: middle;">Synthesized:</td>
     <td style="text-align: center; vertical-align: middle;"><audio controls>
       <source src="/assets/neural-style-audio/texture_synthesis/explosion.mp3.wav.mp3">
       </audio>
     </td>
  </tr>
</table><p/>
<table>
  <tr>
    <td style="text-align: center; vertical-align: middle;">Texture:</td>
    <td style="text-align: center; vertical-align: middle;">
      <audio controls>
      <source src="/assets/neural-style-audio/texture_synthesis/keyboard.mp3">
      </audio>
    </td>
  </tr>
  <tr>
    <td style="text-align: center; vertical-align: middle;">Synthesized:</td>
     <td style="text-align: center; vertical-align: middle;"><audio controls>
       <source src="/assets/neural-style-audio/texture_synthesis/keyboard.mp3.wav.mp3">
       </audio>
     </td>
  </tr>
</table><p/>
<table>
  <tr>
    <td style="text-align: center; vertical-align: middle;">Texture:</td>
    <td style="text-align: center; vertical-align: middle;">
      <audio controls>
      <source src="/assets/neural-style-audio/texture_synthesis/laugh.mp3">
      </audio>
    </td>
  </tr>
  <tr>
    <td style="text-align: center; vertical-align: middle;">Synthesized:</td>
     <td style="text-align: center; vertical-align: middle;"><audio controls>
       <source src="/assets/neural-style-audio/texture_synthesis/laugh.mp3.wav.mp3">
       </audio>
     </td>
  </tr>
</table><p/>
<table>
  <tr>
    <td style="text-align: center; vertical-align: middle;">Texture:</td>
    <td style="text-align: center; vertical-align: middle;">
      <audio controls>
      <source src="/assets/neural-style-audio/texture_synthesis/mission.mp3">
      </audio>
    </td>
  </tr>
  <tr>
    <td style="text-align: center; vertical-align: middle;">Synthesized:</td>
     <td style="text-align: center; vertical-align: middle;"><audio controls>
       <source src="/assets/neural-style-audio/texture_synthesis/mission.mp3.wav.mp3">
       </audio>
     </td>
  </tr>
</table><p/>
<table>
  <tr>
    <td style="text-align: center; vertical-align: middle;">Texture:</td>
    <td style="text-align: center; vertical-align: middle;">
      <audio controls>
      <source src="/assets/neural-style-audio/texture_synthesis/mosquito.mp3">
      </audio>
    </td>
  </tr>
  <tr>
    <td style="text-align: center; vertical-align: middle;">Synthesized:</td>
     <td style="text-align: center; vertical-align: middle;"><audio controls>
       <source src="/assets/neural-style-audio/texture_synthesis/mosquito.mp3.wav.mp3">
       </audio>
     </td>
  </tr>
</table><p/>
<table>
  <tr>
    <td style="text-align: center; vertical-align: middle;">Texture:</td>
    <td style="text-align: center; vertical-align: middle;">
      <audio controls>
      <source src="/assets/neural-style-audio/texture_synthesis/spongebob.mp3">
      </audio>
    </td>
  </tr>
  <tr>
    <td style="text-align: center; vertical-align: middle;">Synthesized:</td>
     <td style="text-align: center; vertical-align: middle;"><audio controls>
       <source src="/assets/neural-style-audio/texture_synthesis/spongebob.mp3.wav.mp3">
       </audio>
     </td>
  </tr>
</table>



</div>
</center>

These examples were generated with Torch code, you can find instructions in the repository.

### Style transfer (or whatever you call it)

Most probably you would say that style transfer for audio is to transfer voice, instruments, intonations. In fact neural style transfer does none aim to do any of that. So we call it style transfer by analogy with image style transfer because we apply the same method.  

<center>
<p/>

<table style="text-align: center; vertical-align: middle;">
<tr>
<td style="text-align: center; vertical-align: middle;">Content:</td>
<td style="text-align: center; vertical-align: middle;"><audio controls>
  <source src="/assets/neural-style-audio/stylization/imperial.mp3">
</audio></td>
</tr>
<tr>
<td style="text-align: center; vertical-align: middle;">Style:</td>
<td style="text-align: center; vertical-align: middle;"><audio controls>
  <source src="/assets/neural-style-audio/stylization/usa.mp3">
</audio></td>
</tr>
<tr>
<td style="text-align: center; vertical-align: middle;">Synthesized:</td>
<td style="text-align: center; vertical-align: middle;"><audio controls>
  <source src="/assets/neural-style-audio/stylization/outputs/imperial_usa.mp3">
</audio></td>
</tr>
</table>
<p/>
<table style="text-align: center; vertical-align: middle;">
<tr>
<td style="text-align: center; vertical-align: middle;">Content:</td>
<td style="text-align: center; vertical-align: middle;"><audio controls>
  <source src="/assets/neural-style-audio/stylization/eminem.mp3">
</audio></td>
</tr>
<tr>
<td style="text-align: center; vertical-align: middle;">Style:</td>
<td style="text-align: center; vertical-align: middle;"><audio controls>
  <source src="/assets/neural-style-audio/stylization/gettysburg.mp3">
</audio></td>
</tr>
<tr>
<td style="text-align: center; vertical-align: middle;">Synthesized:</td>
<td style="text-align: center; vertical-align: middle;"><audio controls>
  <source src="/assets/neural-style-audio/stylization/outputs/eminem_gettysburg.mp3">
</audio></td>
</tr>
</table>

<a href="javascript:look('div2');" title="More examples">More examples</a>
<div id="div2" style="display: none;">

<p/>
<table style="text-align: center; vertical-align: middle;">
<tr>
<td style="text-align: center; vertical-align: middle;">Content:</td>
<td style="text-align: center; vertical-align: middle;"><audio controls>
  <source src="/assets/neural-style-audio/stylization/futurama.mp3">
</audio></td>
</tr>
<tr>
<td style="text-align: center; vertical-align: middle;">Style:</td>
<td style="text-align: center; vertical-align: middle;"><audio controls>
  <source src="/assets/neural-style-audio/stylization/imperial.mp3">
</audio></td>
</tr>
<tr>
<td style="text-align: center; vertical-align: middle;">Synthesized:</td>
<td style="text-align: center; vertical-align: middle;"><audio controls>
  <source src="/assets/neural-style-audio/stylization/outputs/futurama_imperial_11_0.0100.wav.mp3">
</audio></td>
</tr>
</table>

<p/>
<table style="text-align: center; vertical-align: middle;">
<tr>
<td style="text-align: center; vertical-align: middle;">Content:</td>
<td style="text-align: center; vertical-align: middle;"><audio controls>
  <source src="/assets/neural-style-audio/stylization/stairway2.mp3">
</audio></td>
</tr>
<tr>
<td style="text-align: center; vertical-align: middle;">Style:</td>
<td style="text-align: center; vertical-align: middle;"><audio controls>
  <source src="/assets/neural-style-audio/stylization/nightcall.mp3">
</audio></td>
</tr>
<tr>
<td style="text-align: center; vertical-align: middle;">Synthesized:</td>
<td style="text-align: center; vertical-align: middle;"><audio controls>
  <source src="/assets/neural-style-audio/stylization/outputs/stairway2_nightcall_11_0.0100.wav.mp3">
</audio></td>
</tr>
</table>

<p/>

<table style="text-align: center; vertical-align: middle;">
<tr>
<td style="text-align: center; vertical-align: middle;">Content:</td>
<td style="text-align: center; vertical-align: middle;"><audio controls>
  <source src="/assets/neural-style-audio/stylization/usa.mp3">
</audio></td>
</tr>
<tr>
<td style="text-align: center; vertical-align: middle;">Style:</td>
<td style="text-align: center; vertical-align: middle;"><audio controls>
  <source src="/assets/neural-style-audio/stylization/imperial.mp3">
</audio></td>
</tr>
<tr>
<td style="text-align: center; vertical-align: middle;">Synthesized:</td>
<td style="text-align: center; vertical-align: middle;"><audio controls>
  <source src="/assets/neural-style-audio/stylization/outputs/usa_imperial_11_0.0010.wav.mp3">
</audio></td>
</tr>
</table>

<p/>

<table style="text-align: center; vertical-align: middle;">
<tr>
<td style="text-align: center; vertical-align: middle;">Content:</td>
<td style="text-align: center; vertical-align: middle;"><audio controls>
  <source src="/assets/neural-style-audio/stylization/valkyries.mp3">
</audio></td>
</tr>
<tr>
<td style="text-align: center; vertical-align: middle;">Style:</td>
<td style="text-align: center; vertical-align: middle;"><audio controls>
  <source src="/assets/neural-style-audio/stylization/imperial.mp3">
</audio></td>
</tr>
<tr>
<td style="text-align: center; vertical-align: middle;">Synthesized:</td>
<td style="text-align: center; vertical-align: middle;"><audio controls>
  <source src="/assets/neural-style-audio/stylization/outputs/valkyries_imperial_11_0.0100.wav.mp3">
</audio></td>
</tr>
</table>

</div>
</center>
<!-- <table>
<tr>
<td colspan="4" style="text-align: center; vertical-align: middle;">
The Eye of The Tiger
</td>
</tr>
<tr>
<td style="text-align: center; vertical-align: middle;">Texture:</td>
<td style="text-align: center; vertical-align: middle;"><audio controls>
  <source src="/assets/neural-style-audio/texture_synthesis/tiger.mp3">
</audio></td>
<td style="text-align: center; vertical-align: middle;">Synthesized:</td>
<td style="text-align: center; vertical-align: middle;"><audio controls>
  <source src="/assets/neural-style-audio/texture_synthesis/tiger.mp3.wav">
</audio></td>
</tr>
</table>

<table>
<td style="text-align: center; vertical-align: middle;">The Eye of the Tiger</td>
<td style="text-align: center; vertical-align: middle;"><audio controls>
  <source src="/assets/neural-style-audio/texture_synthesis/tiger.mp3">
</audio></td>
<td style="text-align: center; vertical-align: middle;"><audio controls>
  <source src="/assets/neural-style-audio/texture_synthesis/tiger.mp3.wav">
</audio></td>
</tr>
</table> -->

I think with a help of community we will find some funny stylization examples :)

### What's next?
I see a slow but consistent interest increase in music/audio by the community, for sure amazing things are just yet to come. I bet in 2017 already we will find a way to make WaveNet practical but my attempts failed so far :)

---
layout: page
title: About
permalink: /about/
---

I am a PhD student at [Skoltech](http://www.skoltech.ru/en/) in [computer vision group](http://sites.skoltech.ru/compvision/). My supervisors are [Victor Lempitsky](http://sites.skoltech.ru/compvision/members/vilem/) and [Andrea Vedaldi](http://www.robots.ox.ac.uk/~vedaldi/). I also work for [Yandex](https://en.wikipedia.org/wiki/Yandex) Research.

<br/>
<center>
<a href="https://docs.google.com/document/d/1eRQ41fevLl9o95lJbF19ldk5SzooeX1jp-Bxx8gA9m0/edit?usp=sharing"><i class="svg-icon cv"></i></a> <a href="https://www.twitter.com/{{ site.footer-links.twitter }}"><i class="svg-icon twitter"></i></a>
<a href="https://github.com/{{ site.footer-links.github }}"><i class="svg-icon github"></i></a> <a href="https://www.linkedin.com/in/{{ site.footer-links.linkedin }}"><i class="svg-icon linkedin"></i></a>
</center>
<br/>

# Selected publications

<div class="features">
						<article>
							<div class="image"><img src="/assets/about/karya.jpg" alt=""></div>
							<div class="inner">
								<p class="title">Improved Texture Networks: Maximizing Quality and Diversity in Feed-forward Stylization and Texture Synthesis</p>
								<p class="authors">Dmitry Ulyanov, Andrea Vedaldi, Victor Lempitsky</p>
								<p class="conf">arXiv Tech. Report</p>
								<p class="description">
								We introduce <i>Instance Normalization</i> for a better stylization and derive entropy loss which improves samples diversity for both texture synthesis and stylization.
								</p>
								<a href="http://sites.skoltech.ru/app/data/uploads/sites/25/2017/01/texture_nets_v2.pdf">[paper]</a>
								<a href="https://github.com/DmitryUlyanov/texture_nets">[code]</a>
								<a href="http://sites.skoltech.ru/app/data/uploads/sites/25/2017/01/texture_nets_v2_sup.pdf">[supplementary]</a>
								<a href="http://dblp.uni-trier.de/rec/bibtex/journals/corr/UlyanovVL16">[bibtex]</a>   

							</div>
						</article>
						<article>
							<div class="image"><img src="/assets/about/texture_nets.png" alt=""></div>
							<div class="inner">
								<p class="title">Texture Networks: Feed-forward Synthesis of Textures and Stylized Images</p>
                <p class="authors">Dmitry Ulyanov, Vadim Lebedev, Andrea Vedaldi, Victor Lempitsky</p>
                <p class="conf">ICML 2016</p>
								<p class="description">
                We speed up texture synthesis and famous neural style transfer of Gatys <i>et al.</i> by 500 times. The method was used by such stylization apps like <a href="http://prisma-ai.com/">Prisma</a> and <a href="http://vinci.camera/">Vinci</a>.
                </p>
                <a href="http://jmlr.org/proceedings/papers/v48/ulyanov16.pdf">[paper]</a>
								<a href="https://github.com/DmitryUlyanov/texture_nets">[code]</a>
								<a href="http://jmlr.org/proceedings/papers/v48/ulyanov16-supp.pdf">[supplementary]</a>
								<a href="http://dblp.uni-trier.de/rec/bibtex0/conf/icml/UlyanovLVL16">[bibtex]</a>   
							</div>
						</article>
						<article/>
</div>

# Projects

<div class="features">
						<article>
							<div class="image"><img src="/assets/about/spectr.jpg" alt=""></div>
							<div class="inner">
								<p class="projectTitle">Neural texture synthesis and style transfer for audio</p>
                <p class="projectDescription">
								We present an extension of texture synthesis and style transfer method of Leon Gatys et al. for audio. Joint work with Vadim Lebedev.
								</p>

                <a href="https://dmitryulyanov.github.io/audio-texture-synthesis-and-style-transfer/">[blogpost]</a>
								<a href="https://github.com/DmitryUlyanov/neural-style-audio-tf">[code-TF]</a>
								<a href="https://github.com/vadim-v-lebedev/audio_style_tranfer">[code-Lasagne]</a>
								<a href="https://github.com/DmitryUlyanov/neural-style-audio-torch">[code-Torch]</a>           
							</div>
						</article>
						<article>
							<div class="image"><img src="/assets/about/multicore-tsne.png" alt=""></div>
							<div class="inner">
								<p class="projectTitle">Multicore t-SNE</p>
								<p class="projectDescription">
								A multicore modification of L. Van der Maaten's Barnes-Hut t-SNE with python and Torch CFFI-based wrappers. The code also works faster than sklearn.TSNE on 1 core.
								</p>
								<a href="https://github.com/DmitryUlyanov/Multicore-TSNE">[code]</a>
							</div>
						</article>
						<article>
							<div class="image"><img src="/assets/about/online-doodle.png" alt=""></div>
							<div class="inner">
								<p class="projectTitle">Online neural doodle</p>
								<p class="projectDescription">
								"Fast neural doodle" + "Texture Nets" = "Online neural doodle". Feed-forward generator allows real-time applications so we've built a web demo <i>likeMonet</i>.
								</p>
								<a href="https://dmitryulyanov.github.io/feed-forward-neural-doodle/">[blogpost]</a>
								<a href="https://github.com/DmitryUlyanov/online-neural-doodle">[code]</a>
								<a href="https://likemo.net/">[online demo]</a>
							</div>
						</article>
						<article>
							<div class="image"><img src="/assets/about/fast-doodle.png" alt=""></div>
							<div class="inner">
								<p class="projectTitle">Fast neural doodle</p>
								<p class="projectDescription">
								Neural doodle using gram matrices matching as opposed to original patch-based method.
								</p>
								<a href="https://github.com/DmitryUlyanov/fast-neural-doodle">[code]</a>
							</div>
						</article>
						<!-- <article/> -->
					</div>

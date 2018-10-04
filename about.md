---
layout: page
permalink: /about
excerpt: Academic web page
title: About
does_not_need_title: true
---
<h1 style="margin:0px; font-size: 36px">About</h1>
- I am a PhD student at [Skoltech](http://www.skoltech.ru/en/) in [computer vision group](http://sites.skoltech.ru/compvision/). My supervisors are [Victor Lempitsky](http://sites.skoltech.ru/compvision/members/vilem/) and [Andrea Vedaldi](http://www.robots.ox.ac.uk/~vedaldi/).

- Prize winner in about 10 various data science contests (see [CV](https://docs.google.com/document/d/1eRQ41fevLl9o95lJbF19ldk5SzooeX1jp-Bxx8gA9m0/edit?usp=sharing)). I run [class](https://www.coursera.org/learn/competitive-data-science) about *competitive data science* on Coursera.

<br/>
<div class="scaleIcons">
<center>
    <a class="hovernounderline" href="https://docs.google.com/document/d/1eRQ41fevLl9o95lJbF19ldk5SzooeX1jp-Bxx8gA9m0/edit?usp=sharing">
        <i class="svg-icon cv"></i>
    </a>
    <a class="hovernounderline" href="https://www.twitter.com/{{ site.footer-links.twitter }}">
        <i class="svg-icon twitter"></i>
    </a>
    <a class="hovernounderline" href="https://github.com/{{ site.footer-links.github }}">
        <i class="svg-icon github"></i>
    </a>
    <a class="hovernounderline" href="https://www.linkedin.com/in/{{ site.footer-links.linkedin }}">
        <i class="svg-icon linkedin"></i>
    </a>
</center>
</div>
<h1 style="font-size: 36px">Selected publications</h1>
<!-- <> -->
<div class="row publications">
    <div class="col-sm-5 vcenter marginbottom">
        <img class="img-responsive pub-image" src="/assets/about/perceptual_gan.png" alt=""/>
    </div>
    <div class="col-sm-7 vcenter" style="margin-right: -4px; text-align: justify;">
        <p class="title">Image Manipulation with Perceptual Discriminators</p>
        <p class="authors">Diana Sungatullina, Egor Zakharov, Dmitry Ulyanov, Victor Lempitsky</p>
        <p class="conf">ECCV 2018</p>
        <p class="description">
            Perceptual losses and losses based on adversarial discriminators are the two main classes of learning objectives behind these advances. In this work, we show how
            these two ideas can be combined: we use adversarial learning on top of perceptual features and improve SOtA in image translation.  
        </p>
        <div class="links">
            <a href="http://openaccess.thecvf.com/content_ECCV_2018/papers/Diana_Sungatullina_Image_Manipulation_with_ECCV_2018_paper.pdf">Paper</a>
            <a href="https://egorzakharov.github.io/perceptual_gan" style="font-weight: bold;">Project page</a>
            <a href="https://github.com/egorzakharov/PerceptualGAN">Code</a>
            <a href="https://box.skoltech.ru/index.php/s/J0pdkyYgxpMItWQ">Poster</a>
        </div>
    </div>
</div>
<div class="row publications">
    <div class="col-sm-5 vcenter marginbottom">
    	<img class="img-responsive pub-image" src="https://raw.githubusercontent.com/DmitryUlyanov/deep-image-prior/master/data/teaser_compiled.jpg" alt=""/>
    </div>
    <div class="col-sm-7 vcenter" style="margin-right: -4px; text-align: justify;">
		<p class="title">Deep Image Prior</p>
		<p class="authors">Dmitry Ulyanov, Andrea Vedaldi, Victor Lempitsky</p>
		<p class="conf">CVPR 2018</p>
		<p class="description">
			In this paper we show that a randomly-initialized neural network can be used as a handcrafted prior with excellent results in standard inverse problems such as denoising, super-resolution, and inpainting.
		</p>
        <div class="links">
    		<a href="https://sites.skoltech.ru/app/data/uploads/sites/25/2018/04/deep_image_prior.pdf">Paper</a>
    		<a href="/deep_image_prior" style="font-weight: bold;">Project page</a>
    		<a href="https://github.com/DmitryUlyanov/deep-image-prior">Code</a>
            <a href="https://box.skoltech.ru/index.php/s/INaUzvTWLak3h7Q">Paper (journal ver.)</a>
            <a href="https://www.youtube.com/watch?v=-g1NsTuP1_I">Video</a>
            <a href="https://drive.google.com/file/d/1fA5l1wWB0s17CIIgaXe9Gydxxgs5n98i/view?usp=sharing">Slides</a>
            <a href="https://drive.google.com/file/d/1dnpOnmeZF5qg5E-Bi4yMWOZDM_qmYyJA/view?usp=sharing">Poster</a>
            <a href="http://dblp.uni-trier.de/rec/bibtex/journals/corr/abs-1711-10925">BibTeX</a>
        </div>
	</div>
</div>
<div class="row publications border">
    <div class="col col-sm-5 vcenter marginbottom">
        <img class="img-responsive pub-image" src="/assets/about/age22.png" alt=""/>
    </div>
    <div class="col col-sm-7 vcenter" style="margin-right: -4px; text-align: justify;">
        <p class="title">It Takes (Only) Two: Adversarial Generator-Encoder Networks</p>
        <p class="authors">Dmitry Ulyanov, Andrea Vedaldi, Victor Lempitsky</p>
        <p class="conf1"><u>AAAI 2018</u> <b>(oral)</b></p>
        <p class="description">
        We present a new autoencoder-type architecture, that is trainable in an unsupervised mode, sustains both generation and inference, and has the quality of conditional and  unconditional samples boosted by adversarial learning.</p>
        <div class="links">
            <a href="http://sites.skoltech.ru/app/data/uploads/sites/25/2017/06/AGE.pdf">Paper</a>
            <a href="https://github.com/DmitryUlyanov/AGE">Code</a>
            <a href="https://drive.google.com/file/d/1rHcE_H9A0rRmziEcnzsIA_1rdBhHQFsn/view?usp=sharing">Slides</a>
            <a href="http://dblp.uni-trier.de/rec/bibtex/conf/aaai/UlyanovVL18">BibTeX</a>
        </div>
    </div>
</div>
<a name="texture_nets_v2"></a>
<div class="row publications border" >
    <div class="col col-sm-5 vcenter marginbottom">
        <img class="img-responsive pub-image" src="/assets/about/karya.png" alt=""/>
    </div>
    <div class="col col-sm-7 vcenter" style="margin-right: -4px; text-align: justify;" >
        <p class="title">Improved Texture Networks: Maximizing Quality and Diversity in Feed-forward Stylization and Texture Synthesis</p>
        <p class="authors">Dmitry Ulyanov, Andrea Vedaldi, Victor Lempitsky</p>
        <p class="conf">CVPR 2017</p>
        <p class="description">
        We introduce <i>Instance Normalization</i> for a better stylization and derive entropy loss which improves samples diversity for both texture synthesis and stylization.
        </p>
        <div class="links">
            <a href="http://sites.skoltech.ru/app/data/uploads/sites/25/2017/01/texture_nets_v2.pdf">Paper</a>
            <a href="https://github.com/DmitryUlyanov/texture_nets">Code</a>
            <a href="http://sites.skoltech.ru/app/data/uploads/sites/25/2017/01/texture_nets_v2_sup.pdf">Supplementary</a>
            <a href="https://drive.google.com/file/d/0B_-hq6gL70bUYWZaYV96elp3dzQ/view?usp=sharing">Poster</a>
            <a href="http://dblp.uni-trier.de/rec/bibtex1/conf/cvpr/UlyanovVL17">BibTeX</a>   
        </div>
    </div>
</div> 
<div class="row publications border">
    <div class="col col-sm-5 vcenter marginbottom">
        <img class="img-responsive pub-image" src="/assets/about/texture_nets_img.png" alt=""/>
    </div>
    <div class="col col-sm-7 vcenter" style="margin-right: -4px; text-align: justify;">
        <p class="title">Texture Networks: Feed-forward Synthesis of Textures and Stylized Images</p>
        <p class="authors">Dmitry Ulyanov, Vadim Lebedev, Andrea Vedaldi, Victor Lempitsky</p>
        <p class="conf">ICML 2016</p>
                        <p class="description">
        We speed up texture synthesis and famous neural style transfer of Gatys <i>et al.</i> by 500 times. The method was used by such stylization apps like <a href="http://prisma-ai.com/">Prisma</a> and <a href="http://vinci.camera/">Vinci</a>.
        </p>
        <div class="links">
            <a href="http://jmlr.org/proceedings/papers/v48/ulyanov16.pdf">Paper</a>
            <a href="https://github.com/DmitryUlyanov/texture_nets">Code</a>
            <a href="http://jmlr.org/proceedings/papers/v48/ulyanov16-supp.pdf">Supplementary</a>
            <a href="https://drive.google.com/file/d/0B_-hq6gL70bUdDBCUHVJWVlWWjQ/view?usp=sharing">Slides</a>
            <a href="https://drive.google.com/file/d/0B_-hq6gL70bURnZFcnRNemppWW8/view?usp=sharing">Poster</a>
            <a href="http://dblp.uni-trier.de/rec/bibtex0/conf/icml/UlyanovLVL16">BibTeX</a>
        </div>
    </div> 
</div>


<br/>
<h1 style="font-size: 36px">Projects</h1>
<!-- < -->
<!-- <div id="projects"> -->
<div class="row projects">                       
    <div class="col col-sm-3 vcenter imgcol marginbottom">
        <img class="img-responsive proj-img" src="/assets/about/spectr.jpg" alt=""/>
    </div>
    <div class="col col-sm-9 vcenter" style="margin-right: -4px; text-align: justify;">
        <p class="title">Neural Texture Synthesis and Style Transfer for Audio</p>
        <p class="description">
        We present an extension of texture synthesis and style transfer method of Leon Gatys et al. for audio. Joint work with Vadim Lebedev.
        </p>
        <div class="links">
            <a href="https://dmitryulyanov.github.io/audio-texture-synthesis-and-style-transfer/">Blog post</a>
            <a href="http://sites.skoltech.ru/app/data/uploads/sites/25/2017/09/Audio_style_transfer.pdf">Slides</a>
            <a href="https://github.com/DmitryUlyanov/neural-style-audio-tf">Code-TF</a>
            <a href="https://github.com/vadim-v-lebedev/audio_style_tranfer">Code-Lasagne</a>
            <a href="https://github.com/DmitryUlyanov/neural-style-audio-torch">Code-Torch</a>
            <a href="https://www.youtube.com/watch?v=HgTcKi8-qcM">Video (rus)</a>
        </div>
    </div>
</div>
<div class="row projects border">                       
    <div class="col col-sm-3 vcenter imgcol marginbottom">
        <img class="img-responsive proj-img" src="/assets/about/multicore-tsne.png" alt=""/>
    </div>
    <div class="col col-sm-9 vcenter" style="margin-right: -4px; text-align: justify;">
        <p class="title">Multicore t-SNE</p>
        <p class="description">
        A multicore modification of L. Van der Maaten's Barnes-Hut t-SNE with python and Torch CFFI-based wrappers. The code also works faster than sklearn.TSNE on 1 core.
        </p>
        <div class="links">
            <a href="https://github.com/DmitryUlyanov/Multicore-TSNE">Code</a>
        </div>
    </div>
</div>
<div class="row projects border">                       
    <div class="col col-sm-3 vcenter imgcol marginbottom">
        <img class="img-responsive proj-img" src="/assets/about/online-doodle.png" alt=""/>
    </div>
    <div class="col col-sm-9 vcenter" style="margin-right: -4px; text-align: justify;">
        <p class="title">Online Neural Doodle</p>
        <p class="description">
        "Fast neural doodle" + "Texture Nets" = "Online neural doodle". Feed-forward generator allows real-time applications so we've built a web demo <i>likeMonet</i>.
        </p>
        <div class="links">
            <a href="https://dmitryulyanov.github.io/feed-forward-neural-doodle/">Project page</a>
            <a href="https://github.com/DmitryUlyanov/online-neural-doodle">Code</a>
            <a href="https://likemo.net/">Online demo</a>
        </div>
    </div>
</div>
<div class="row projects border">                       
    <div class="col col-sm-3 vcenter imgcol marginbottom">
        <img class="img-responsive proj-img" src="/assets/about/fast-doodle.png" alt="">
    </div>
    <div class="col col-sm-9 vcenter" style="margin-right: -4px; text-align: justify;">
        <p class="title">Fast Neural Doodle</p>
        <p class="description">
        Neural doodle using gram matrices matching as opposed to original patch-based method.
        </p>
        <div class="links">
            <a href="https://github.com/DmitryUlyanov/fast-neural-doodle">Code</a>
        </div>
    </div>
</div>
<div class="row projects border">                       
    <div class="col col-sm-3 vcenter imgcol marginbottom">
        <img class="img-responsive proj-img" src="/assets/about/large-image-viewer.jpg" alt=""/>
    </div>
    <div class="col col-sm-9 vcenter" style="margin-right: -4px; text-align: justify;">
        <p class="title">Large Image Viewer</p>
        <p class="description">
        Web-based viewer for very large images.
        </p>
        <div class="links">
            <a href="https://github.com/DmitryUlyanov/large-image-viewer">Code</a>
        </div>
    </div>
</div>
<div class="row projects border">                       
    <div class="col col-sm-3 vcenter imgcol marginbottom">
        <img class="img-responsive proj-img" src="/assets/about/pytorch_in_theano.png" alt=""/>
    </div>
    <div class="col col-sm-9 vcenter" style="margin-right: -4px; text-align: justify;">
        <p class="title">Pytorch in Theano</p>
        <p class="description">
        Run Pytorch graphs inside any Theano graph.
        </p>
        <div class="links">
            <a href="https://github.com/DmitryUlyanov/pytorch-in-theano">Code</a>
        </div>
    </div>
</div>
<div class="row projects border">                       
    <div class="col col-sm-3 vcenter imgcol marginbottom">
        <img class="img-responsive proj-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/TeX_logo.svg/1028px-TeX_logo.svg.png" alt=""/>
    </div>
    <div class="col col-sm-9 vcenter" style="margin-right: -4px; text-align: justify;">
        <p class="title">TeX publishing util</p>
        <p class="description">
        A utility, that prepares a latex project for packaging and publication. It removes redundant files, comments, flattens file structure.
        </p>
        <div class="links">
            <a href="https://github.com/DmitryUlyanov/tex-publishing-util">Code</a>
        </div>
    </div>
</div>
<!-- </div> -->


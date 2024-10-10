---
layout: page_nav
pgtitle: CCFs Correction for Multimodal Surface Wave Tomography (Ongoing)
title: Cross-correlation Functions Correction for Multimodal Surface Wave Tomography (Ongoing)
description: Geophysics:Seiemology
img: assets/img/research/5/cover.png
importance: 3
category: Methodology
related_publications: false
cited_keys:
    - fjwang
    - cjq2022
    - bensen2007
---
+ <strong>Notice:</strong> This work is still ongoing. Currently, I have some ideas and am in the process of designing experiments to verify them. Updates will be posted here once I obtain interesting results. The methodology will be shared once it has proven useful and is in a peer-review state due to competitive concerns. 

## Motivation

Surface wave dispersion curves can be derived by integrating empirical Green's functions (EGFs) across interarray spacing in seismic arrays. In the context of ambient noise, EGFs are obtained from ambient noise cross-correlation functions (CCFs) {% cite bensen2007 %}. To improve the quality of EGFs, numerous strategies have been developed to process the raw CCFs, including linear and nonlinear stacking of CCF segments, preprocessing with prewhitening or one-bit methods, and noise-source-related analyses. Here, we refer to all these CCF-related processes as CCF correction. 

Currently, there are still controversial arguments regarding different correction methods, and some of which require extensive calculations and predominantly focus on extracting surface waves of the fundamental mode. With the development of the frequency-Bessel transform (F-J) method {% cite fjwang %}, multimodal surface wave imaging has emerged as a state-of-the-art approach in ambient noise tomography. As indicated by our previous <a href="{{ site.baseurl }}/projects/1-1_meth_nonlinear-stacking/" target="_blank" rel="noopener noreferrer">stacking analysis</a> , while useful, it has not significantly improved the dispersion spectrogram for overtones. Therefore, this project aims to develop new correction strategies for CCFs to streamline the need for high-quality EGFs in multimodal surface wave tomography.

## Traditional CCFC (TCCFC)
The currently standard processing procedures of the F-J method, referred to as traditional cross-correlation function correlation <strong>TCCFC</strong>, include the following steps:
+ Remove the mean, trend, and instrument response from the raw data.
+ Apply pre-whitening and one-bit normalization in both the time and frequency domains.
+ Calculate cross-correlation after segmenting the signals.
+ Directly stack all CCF segments, known as Linear Stacking (LS).

## Updates 1.0 for CCFC_1: 
+ I developed and tested two new CCF correction strategies with a similar conceptual approach, which we will refer to as <strong>CCFC_1-1</strong> and <strong>CCFC_1-2</strong>. This post shares the inspiring results of our test of <strong>CCFC_1-1</strong> and <strong>CCFC_1-2</strong> in a dense array. (Update at 2024/10/10)
+ This test was on seismic arryas deployed at eastern South China Block (SCB) (Figure 1.0-1).
 
### Test Data 
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/research/5/scb.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    <strong>Figure 1.0-1. (Modified from {% cite cjq2022 %})</strong> (a) Regional tectonics in the study area. The thick solid black lines indicate the boundaries of the main tectonic units, and the thin solid lines indicate the boundaries between provinces. The thick dashed black line represents the North-South Gravity Lineament. The abbreviations are as follows: TLF, Tanlu fault; ZDF, Zhenghe-Dapu fault; SJPFZ, Shaoxing-Jiangshan-Pingxiang fault zone; SBB, Subei Basin; NCB, North China Basin; and JHB, Jianghan Basin. The red straight lines identify the locations of the velocity slices in Figure 8. (b) Distribution of seismic stations used in this study. The red frame indicates the subarea we are going to use.
</div>

### Results
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/research/5/ccfc1.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    <strong>Figure 1.0-2.</strong> Comparison results on both time domain CCFs and corresponding dispersion spectrogram results after applying TCCFC, CCFC_1-1, and CCFC_1-2.
</div>
+ We can see that the SNR of the fundamental mode is significantly improved, and several multimodal strips have clearly appeared in the time domain CCFs.
+ In terms of the dispersion spectrogram, the overtones are much clearer after applying <strong>CCFC_1-1</strong> and <strong>CCFC_1-2</strong>  compared to <strong>TCCFC</strong>.
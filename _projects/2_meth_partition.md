---
layout: page_nav
pgtitle: A Quantitative Partition for Array-based Surface Wave Tomography
title: A Quantitative Subarray Selection Strategy for Array-based Surface Wave Tomography -- Partition Similarity Test (PST)
description: Geophysics:Seiemology
img: assets/img/research/2/cover_dispersion.png
importance: 2
category: Methodology
related_publications: false
cited_keys:
    - fjwang
    - leakingLi
    - sgb
    - synLi
---

## Abstract
Dense seismometer arrays offer new opportunities for exploring delicate near-surface near-fault structures. By integrating regional dense seismic array data, seismologists' understanding of fault systems has rapidly improved in the past decade. However, obtaining a high-resolution shear wave velocity structure is still challenging, especially for complex near-fault systems. In this work, we apply the recently developed array-based multimodal surface wave tomography method (the frequency-Bessel transform method, abbreviated as the F-J method) to image complex subsurface systems. This method provides dispersion curves with a broader frequency band, enhanced resolution, and overtone extraction. However, limited by the subarray selection for three-dimensional imaging, integrating the F-J method into complex structures needs a more reliable workflow. We propose the "partition similarity test" method (FJ-PST) to adaptively and quantitatively find suitable subarrays to address the partition challenge adaptively by testing larger subarrays with smaller ones based on the dispersion similarity. 

## An Issue of Partition
### A critical assumption of the F-J method:
The F-J method utilizes a Bessel function integration to reveal the dispersion spectrogram ($$I(\omega,k)$$) from the CCFs in the frequency domain ($$C(\omega,k)$$): 

$$I(\omega,k) = \int_0^{+\infty}C(\omega,k)\cdot J_0(kr)rdr\tag{1}$$

Where $$\omega$$ is the angular frequency, r is the epicentral distance, k is the wavenumber, and $$J_0(kr)$$ is the first kind of zeroth-order Bessel function. The dispersion curves can be estimated from the local maximum of the dispersion spectrogram. In addition to the fundamental mode, it can effectively retrieve overtone dispersion curves {% cite fjwang %} and even leaking modes {% cite leakingLi %}. However, As an array-based method, it assumes that the coverage of a subarray has a <strong>layered velocity structure </strong>.
### What happened to a non-layered structure?
The traditional partitioning method tests various sizes of regular shapes, such as circular or square partitions, to identify suitable configurations and employs moving windows to indiscriminately cover the array. While this approach can be effective in large-scale lithospheric tomography, it presents challenges for imaging complex structures. As noted in previous synthetic work {% cite synLi %} (Figure 1), the dispersion spectrogram obtained using the F-J method bifurcates into different structures' dispersion patterns when subjected to drastic velocity variations. Therefore, irregular-shaped subarrays are necessary to avoid crossing these areas. Although irregular-shaped partitions can be manually tested and selected, this significantly increases the workload.
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/research/2/synLi.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    <strong>Figure 1.</strong> A three-dimensional synthetic test for a laterally heterogeneous model. (a) A profile of the test model in the x-z plane. From 0 to 260 km, the thickness of the first layer is 5 km (we call this Model 1); and from 310 to 560 km, the thickness of the first layer is 10 km (we call this Model 2). Between Models 1 and 2, there is a 50-km transition area. We set an earthquake (red star) at a depth of 1 km and 1,000 stations (blue triangles) with an interval of 0.4 km on the free surface. (b) Theoretical dispersion curves of Models 1 and 2. The black points are for Model 1, and the red points are for Model 2. (c) Dispersion spectrum extracted by all records. The black and white points represent the theoretical dispersion curves of Models 1 and 2, respectively (the same in d, e, and f). (d) Dispersion spectrum extracted by the stations from 60 to 250 km along the x axis. (e) Dispersion spectrum extracted by the stations from 200 to 400 km along the x axis. The green points are the fundamental dispersion curves of the average model in the transition area. (f) Dispersion spectrum extracted by the stations from 350 to 500 km
</div>

## Partition Similarity Test
To address the previously mentioned problem, we aim to develop a quantitative measure for adaptively selecting suitable irregular-shaped partitions. In this study, the proposed measurement is based on the similarity of dispersion curves.
### Criteria of similarity between two dispersion curves:
To objectively evaluate dispersion curves’ similarity, a relative error (RE) is defined as follows:

$$e_{12} = \frac{\sum_{i=1}^{N} \left|c_1(f_i)-c_2(f_i)\right|}{\sum_{i=1}^{N}max[c_1(f_i),c_2(f_i)]}\tag{2})$$

Where $$f_1$$ to $$f_N$$ represent the N picked frequency points for two dispersion curves, while $$c_1 (f_i)$$ and $$c_2 (f_i)$$ represent the corresponding phase velocity at $$f_i$$. Figure 2 illustrates this design.
<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-2 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/research/2/cover_dispersion.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    <strong>Figure 2.</strong> An illustration of how relative error is defined for two picked dispersion curves. The red curves and blue curves are two hypothetical dispersion curves. The red dots and blue triangles are hypothetical points from these curves. The green area is absolute error (AE), and the green area divided by the gray area is relative error (RE) between two dispersion curves. The value calculated by equation (2) approximates RE.
</div>

### Workflow of the Partition Similarity Test:
The partition similarity test (PST) assesses the homogeneity within a subarray and eliminates stations producing dissimilar dispersion curves to form a new one. The workflow consists of four steps:

Firstly, the size of "targets" and "probes" should be set. A "target" represents a sizeable regular-shaped subarray, and "probes" are those smaller subarrays used to evaluate targets. The target size depends on the aimed dispersion frequency band, whereas the probe size depends on where the target’s dispersion spectrogram bifurcates. All possible targets and probes are generated to thoroughly utilize the data and enhance lateral resolution, as shown in Figure 2.

Secondly, the RE of each probe is calculated within each target by the previous measurement. At this step, all other probes’ dispersion curves RE are calculated with the one nearest to the target centroid.

Thirdly, the error threshold is set, and the remaining probes are combined. Determining an appropriate and unbiased threshold requires further research. It could be empirically set as 0.05. Subsequently, new subarrays will be generated by combining each target's remaining probes.

Finally, quality control is performed to remove unsatisfactory partitions. In transition zones, probes may still exhibit bifurcation in their dispersion spectrogram, resulting in accepting few or disconnected probes. These new partitions can still not accurately estimate their centroid velocity. Therefore, only subarrays generated by more than four adjacent probes will be used.

## Comparison to F-J
Here, we demonstrate the effectiveness of the FJ-PST by comparing it to the dispersion spectrogram calculated by the traditional F-J method in a dense nodal array deplyed at San Jacinto Fault Zone {% cite sgb %}. As indicated in Figure 3, the entire array suffered from extensive and severe fundamental mode bifurcation on the dispersion spectrogram calculated by the traditional F-J method, while the FJ-PST successfully detected the boundaries and adaptively adjusted the subarrays to mitigate this issue.
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/research/2/fjs.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    <strong>Figure 3.</strong> The comparison between FJ-PST and the traditional F-J for 5 different subarrays. (a) The subarrays of FJ-PST (blue) and the nearest subarrays of traditional F-J (green). (b) The dispersion spectrogram calculated by the F-J for the green subarrays in (a). The red dashed squares indicate the fundamental mode bifurcation. (c) The dispersion spectrogram calculated by the F-J for the blue subarrays in (a).
</div>

## Applications 
### High-resolution Fault-Zone Tomography
+ <strong>Related Project: <a href="{{ site.baseurl }}/projects/4_app_tomo-SGB/" target="_blank" rel="noopener noreferrer">Complex Fault Tomography Using FJ-PST (San Jacinto Fault Zone)</a>

---
layout: page_nav
pgtitle: Complex Fault Tomography Using FJ-PST (San Jacinto Fault Zone)
title: Refine Shallow Vs Model of Complex Subsurface Structures by F-J Multimodal Tomography with Partition Similarity Test-- A Case Study at San Jacinto Fault Zone
description: Geophysics:Seiemology
img: assets/img/research/4/cover.png
importance: 1
category: Application
related_publications: true
cited_keys:
    - sgb
    - wade2018
    - mordret2019
    - share2020
---

## Abstract
In our previous methodological work, we proposed the <a href="{{ site.baseurl }}/projects/1-2_meth_partition/" target="_blank" rel="noopener noreferrer">FJ-PST</a> method to address the bifurcation issues commonly encountered when imaging complex subsurface structures. In this study, we applied the <a href="{{ site.baseurl }}/projects/1-2_meth_partition/" target="_blank" rel="noopener noreferrer">FJ-PST</a> method to image the Sagebrush Flat (SGB) site along the Clark fault (CF) strand of the San Jacinto fault zone, refining its $$v_s$$ structure. The imaging results exhibit high resolution, revealing two buried low-velocity channels, a trapping structure, an inferred fault, and notable lateral velocity variations along CF branches. Given the enhanced detail and resolution provided by this method, we believe it is well-suited for complex subsurface tomography.

## Geological Setting
In this study, ambient noise data recorded by a dense Nodal array around the Clark branch of the SJFZ at the Sagebrush Flats (SGB) was used for tomography. The array had an average 10m row interstation and 30m row separation {% cite sgb %}. {% cite wade2018 %} analyzed the lithology and surface fault traces at the SGB site Based on the $$v_s$$ properties {% cite mordret2019 %} and surface geological mapping results, as depicted in Figure 1(a) (edit from {% cite share2020 %}). Three exposed faults (F102, F104, F106) traverse the array from northwest to southeast, forming the branches of Clark fault, while another inferred but not field-observed fault (F105) lies to the northeast.
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/research/4/geo.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    <strong>Figure 1.</strong> Geological and topographic data are analyzed here. (a) Lithology and damage intensity mapping at the surface modified from Share et al. (2020). The main geological/lithological units are CVP—Coahuila Valley Pluton, BVC—Burnt Valley Complex, Qa—Quaternary sediments, and Qb—Plio-Pleistocene Bautista Formation. More differentiated sediments are Qaf—alluvial fan and Qc—colluvium. The colored dots indicate the damage intensity of the rock. The red solid line represents the strike-slip fault observed from the field by Wade (2018), and the red dashed line represents the inferred faults not observed in the field. (b) Distribution of the dense seismic array used in this study. The background color is the relief calculated within a 10 m radius and topography from the B4 lidar project (Bevis et al., 2005). The blue solid lines are the surface traces for the trifurcation faults, referred to as F106, F104, and F102 from left to right by USGS (Dor et al., 2006). The red solid lines are the same trifurcation faults Wade (2018) obtained after a joint analysis of different research. The red dashed line represents the inferred fault trace. The black solid lines tagged by row numbers indicate the reference locations in Figure 8 and 9.
</div>

## Workflow of the FJ-PST
The workflow of integrating <a href="{{ site.baseurl }}/projects/1-2_meth_partition/" target="_blank" rel="noopener noreferrer">FJ-PST</a> to obtain a 3D $$v_s$$ model mainly consists of four steps (as shown in Figure 2 and Figure 3):
+ Firstly, subarrays are adaptively generated based on the aimed frequency band from the partition similarity test. 
+ Secondly, the F-J transform is performed to obtain the dispersion spectrogram for each subarray. 
+ Thirdly, multimodal dispersion curves are picked and examined, and the 1D $$v_s$$ structures are obtained by the BFGS method of each subarray. 
+ Finally, all 1D $$v_s$$ structures are merged to construct the 3D $$v_s$$ model using Kriging interpolation.
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/research/4/work2.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    <strong>Figure 2.</strong> The flowchar of using the FJ-PST to obtain the v_s model
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/research/4/work1.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    <strong>Figure 3.</strong> Workflow to retrieve the 3D Vs model from ambient noise data. (a) The distribution of the targets’ centroid and the generated subarrays’ centroid by the partition similarity test. The blue hollow circles represent the centroid of all targets, and the green stars represent the centroid of generated subarrays. The letter S refers to the sample subarray enveloped by the red lines, and the red stars represent the centroid location of this subarray. (b) The frequency domain CCFs of S. (c) The F-J spectrogram calculated from CCFs of S. (d) The dispersion curves picked from the F-J spectrogram. (e) 1D Vs model from the inversion of multimodal dispersion curves with the Broyden-Fletcher-Goldfarb-Shanno method. (f) A depth slice at 100m of the final 3D Vs model by merging 1D Vs models at all reference locations.
</div>

## Results
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/research/4/phase.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    <strong>Figure 4.</strong> Phase velocity for the fundamental mode at (a) 4Hz, (b) 8Hz, and (c) 15Hz. The highest mode extracted for each subarray are shown in (d)
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/research/4/vs1.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    <strong>Figure 5.</strong> Representative vertical slices of the final 3D (a) Vs model and (b) Vs perturbation for a left perspective, and (c) Vs model and (d) Vs perturbation for a right perspective from the inversion of multimodal dispersion curves along the trifurcation area. The black solid lines represented the fault traces of USGS (Dor et al., 2006), and the black dashed line represented the inferred fault trace F105 by Wade (2018). The red dashed lines represent two high-resolution buried channels revealed in this model, and the blue dashed lines represent the trapping structure, buried channel 2, and a possible buried F105.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/research/4/vs2.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    <strong>Figure 6.</strong> The depth slices of the final 3D Vs model from the inversion of multimodal dispersion curves from (a) 10m to 30m, (b) 40m to 80m, (c) 80m to 120m, and (d) 130m to 170m. The red dash line represents the buried channel 1. The red dotted line represents the buried channel 2.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/research/4/vs4.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    <strong>Figure 7.</strong> The vertical slices of (a) Vs model and (b) Vs perturbation within the fault trifurcation area (referenced in Figure 1(b) from Row 8 to Row 12). The vertical black dash lines and gray solid lines in each plot represent the fault traces estimated by USGS Dor et al. (2006) and Wade (2018), respectively. Three velocity contours are typically marked in (a) and (c) as different filling lines to visualize the variations better. The black solid lines indicate the reverse fault mechanism.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/research/4/vs5.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
   <strong>Figure 8.</strong> The vertical slices of (a) Vs model and (b) Vs perturbation within the fault trifurcation area (referenced in Figure 1(b) from Row 12 to Row 17). The vertical black dash lines and gray solid lines in each plot represent the fault traces estimated by USGS Dor et al. (2006) and Wade (2018), respectively. Three velocity contours are typically marked in (a) and (c) as different filling lines to visualize the variations better. The black solid lines indicate the reverse fault mechanism.
</div>
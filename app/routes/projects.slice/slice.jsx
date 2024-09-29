import sliceAnnotationLarge from '~/assets/slice-annotation-large.png';
import sliceAnnotationPlaceholder from '~/assets/slice-annotation-placeholder.png';
import sliceAnnotation from '~/assets/slice-annotation.png';
import sliceAppLarge from '~/assets/rice.jpg';
import sliceAppPlaceholder from '~/assets/rice.jpg';
import sliceApp from '~/assets/rice.jpg';
import sliceBackgroundBarLarge from '~/assets/qop.png';
import sliceBackgroundBarPlaceholder from '~/assets/qop.png';
import sliceBackgroundBar from '~/assets/qop.png';
import sliceBackgroundLarge from '~/assets/qop.png';
import sliceBackgroundPlaceholder from '~/assets/qop.png';
import sliceBackground from '~/assets/qop.png';
import sliceIrlPlaceholder from '~/assets/2-2.png';
import sliceIrl from '~/assets/2-2.png';
import sliceLast from '~/assets/2-3.png';
import sliceSidebarAnnotationsLarge from '~/assets/slice-sidebar-annotations-large.png';
import sliceSidebarAnnotationsPlaceholder from '~/assets/slice-sidebar-annotations-placeholder.png';
import sliceSidebarAnnotations from '~/assets/slice-sidebar-annotations.png';
import sliceSidebarLayersLarge from '~/assets/2-1.png';
import sliceSidebarLayersPlaceholder from '~/assets/2-1.png';
import sliceSidebarLayers from '~/assets/2-1.png';
import sliceSlidesLarge from '~/assets/resnett.png';
import sliceSlidesPlaceholder from '~/assets/resnett.png';
import sliceSlides from '~/assets/resnett.png';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { Fragment } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './slice.module.css';
import ReactCodeMirror from '@uiw/react-codemirror';

const title = 'Rice Leaf Disease Classification';
const description =
  'The goal of this project is to create a classifier that can accurately identify different diseases affecting rice leaves. The dataset used for training is sourced from Kaggle and contains multiple classes of rice leaf diseases.';
const roles = [
  'Preprocessing',
  'Model Selection',
  'Training Loop',
  'Prediction and Visualization',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Slice = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={sliceBackground}
          srcSet={`${sliceBackground} 1280w, ${sliceBackgroundLarge} 2560w`}
          width={1280}
          height={800}
          placeholder={sliceBackgroundPlaceholder}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://github.com/Kh1606/Projects/tree/main/RiceLeaf-Image%20Classification"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${sliceApp} 800w, ${sliceAppLarge} 1920w`}
              width={800}
              height={500}
              placeholder={sliceAppPlaceholder}
              alt="The Slice web application showing a selected user annotation."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Preporcessing</ProjectSectionHeading>
              <ProjectSectionText>
                <li>Import all needable libraries: torch, matplotlib, pandas and etc.</li>
              </ProjectSectionText>
              <ProjectSectionText>
                <li>
                  {' '}
                  The dataset is split into training (80%), validation (10%), and test
                  sets (10%) using random_split.
                </li>
              </ProjectSectionText>{' '}
              <ProjectSectionText>
                <li>
                  Data loaders are then created for each subset, with a batch size of 14
                  for training and validation, and 1 for testing.
                </li>
              </ProjectSectionText>
            </div>
            <div>
              <Image
                srcSet={`${sliceSidebarLayers} 350w, ${sliceSidebarLayersLarge} 700w`}
                width={350}
                height={750}
                placeholder={sliceSidebarLayersPlaceholder}
                alt="Multiple user annotations on a shared layer."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Model Selection</ProjectSectionHeading>
              <ProjectSectionText>
                <li>
                  The ResNet18 model is loaded using timm, with timm.create_model().
                </li>
                <li>
                  The model is initialized with pretrained weights, and the number of
                  output classes is set to 8 (indicating there are 8 types of leaf
                  conditions).
                </li>
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${sliceSlides} 800w, ${sliceSlidesLarge} 1920w`}
              width={800}
              height={500}
              placeholder={sliceSlidesPlaceholder}
              alt="The new My Slides tab in slice, showing annotated and favorited slides."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />{' '}
            <ProjectTextRow>
              <ProjectSectionHeading>Loss Function and Optimizer</ProjectSectionHeading>
              <ProjectSectionText>
                <li>
                  The loss function used is CrossEntropyLoss, appropriate for multi-class
                  classification.
                </li>
                <li>The optimizer is Adam, with a learning rate of 3e-4.</li>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        {/* <ProjectSection padding="top">
          <ProjectSectionContent className={styles.grid}>
            <div className={styles.gridImage}>
              <div className={styles.gridBackground}>
                <Image
                  srcSet={`${sliceBackgroundBar} 440w, ${sliceBackgroundBarLarge} 880w`}
                  width={440}
                  height={790}
                  placeholder={sliceBackgroundBarPlaceholder}
                  alt=""
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                />
              </div>
              <div className={styles.gridForeground}>
                <Image
                  srcSet={`${sliceAnnotation} 440w, ${sliceAnnotationLarge} 880w`}
                  width={440}
                  height={340}
                  placeholder={sliceAnnotationPlaceholder}
                  alt="An annotation preview popover with statistics for shape perimeter and area."
                  sizes={`(max-width: ${media.mobile}px) 584px, (max-width: ${media.tablet}px) 747px, 556px`}
                />
              </div>
            </div>
            <div className={styles.gridText}>
              <ProjectSectionHeading>Meaningful details</ProjectSectionHeading>
              <ProjectSectionText>
                Marking and annotating areas on high resolution biomedical images is the
                core experience of the app, and it was easy to get lost or lose sense of
                scale when zooming in on details. Adding measurements for the perimeter
                and area of an annotation both helped to communicate the overall scale of
                the image and how large the annotated feature is in comparison.
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection> */}
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Training Loop </ProjectSectionHeading>
              <ProjectSectionText>
                <li>The training loop runs for 10 epochs.</li>
                <li>Each epoch involves both training and validation phases.</li>
                <li>
                  The model parameters are updated using backpropagation during training.
                </li>
                <li>
                  Validation is performed without gradient tracking, and the validation
                  loss and accuracy are recorded.
                </li>
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              src={sliceIrl}
              width={940}
              height={500}
              placeholder={sliceIrlPlaceholder}
              alt="Students at the University of New South Wales using the new collaborative annotation features"
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Prediction and Visualization</ProjectSectionHeading>
              <ProjectSectionText>
                <li>
                  The code iterates through a batch of images and predicts their classes.
                </li>
                <li>Predictions are compared to actual labels.</li>
                <li>
                  The result and prediction for random samples are visualized using
                  matplotlib.
                </li>
                <li>Training and validation accuracy scores are plotted.</li>
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              src={sliceLast}
              width={940}
              height={500}
              placeholder={sliceLast}
              alt="Students at the University of New South Wales using the new collaborative annotation features"
            />
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};

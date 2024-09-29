import sliceAnnotationLarge from '~/assets/slice-annotation-large.png';
import sliceAnnotationPlaceholder from '~/assets/slice-annotation-placeholder.png';
import sliceAnnotation from '~/assets/slice-annotation.png';
import sliceAppLarge from '~/assets/3-1.png';
import sliceAppPlaceholder from '~/assets/3-1.png';
import sliceApp from '~/assets/3-1.png';
import sliceBackgroundBarLarge from '~/assets/qop.png';
import sliceBackgroundBarPlaceholder from '~/assets/qop.png';
import sliceBackgroundBar from '~/assets/qop.png';
import sliceBackgroundLarge from '~/assets/loki.jpg';
import sliceBackgroundPlaceholder from '~/assets/loki.jpg';
import sliceBackground from '~/assets/loki.jpg';
import sliceIrlPlaceholder from '~/assets/gray].png';
import sliceIrl from '~/assets/gray].png';
import sliceLast from '~/assets/csv.png';
import sliceLast2 from '~/assets/2024-09-26 15.38.48.jpg';
import sliceSidebarAnnotationsLarge from '~/assets/slice-sidebar-annotations-large.png';
import sliceSidebarAnnotationsPlaceholder from '~/assets/slice-sidebar-annotations-placeholder.png';
import sliceSidebarAnnotations from '~/assets/slice-sidebar-annotations.png';
import sliceSidebarLayersLarge from '~/assets/insomnia_s2_11.jpg';
import sliceSidebarLayersPlaceholder from '~/assets/insomnia_s2_11.jpg';
import sliceSidebarLayers from '~/assets/insomnia_s2_11.jpg';
import sliceSlidesLarge from '~/assets/crop.png';
import sliceSlidesPlaceholder from '~/assets/crop.png';
import sliceSlides from '~/assets/crop.png';
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
import styles from './insomnia.module.css';
import ReactCodeMirror from '@uiw/react-codemirror';

const title = 'Insomnia Data Analysis and Automation Project';
const description =
  'In this project, I developed a fully automated system to extract and analyze sleep data from images, with a focus on insomnia research. The project involved processing images from sleep tracking applications, such as Samsung Health, and converting the data into structured formats for further analysis.';
const roles = [
  'Extracting Sleep Period',
  'Cropping Graph',
  'Grayscaling',
  'Creating CSV',
  'Visualization',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Insomnia = () => {
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
          url="https://github.com/Kh1606/Projects/tree/main/Insomnia%20-%20Data%20Analysis%20and%20Automation"
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
              <ProjectSectionHeading>Extracting Sleep Period</ProjectSectionHeading>
              <ProjectSectionText>
                This is example of source data image, as you can see here given: Sleep
                period, overall time of sleep, 4 Sleeps stages and graph. Here I used
                "Tesseract" to extract sleep period and added it to image file name, to
                use it further.
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
              <ProjectSectionHeading>Cropping Graph</ProjectSectionHeading>
              <ProjectSectionText>
                After extracting sleep period time and adding it on file name, I dont need
                other text information, so I cropped graph.
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
              <ProjectSectionHeading>Grayscaling</ProjectSectionHeading>
              <ProjectSectionText>
                Here I converted RGB image into Grayscale, and changed each image width to
                equal sleep minute(in first step I added sleep time into file name).
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
              <ProjectSectionHeading>Creating CSV</ProjectSectionHeading>
              <ProjectSectionText>
                This is How final CSV file looks like. It has 3 column and rows count is
                equal to sleep period of each image. If sleep period 7hr (7x60=420), row
                count will be 420 also.
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
        </ProjectSection>{' '}
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Visualization</ProjectSectionHeading>
              <ProjectSectionText>
                This is last visualization. I tried show accuracy between source file and
                CSV. graph on below made from CSV information. Accuracy result is quite
                high.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              src={sliceLast2}
              width={940}
              height={500}
              placeholder={sliceLast2}
              alt="Students at the University of New South Wales using the new collaborative annotation features"
            />
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};

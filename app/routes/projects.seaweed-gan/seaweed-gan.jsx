import backgroundSprLarge from '~/assets/spr-background-large.jpg';
import backgroundSprPlaceholder from '~/assets/spr-background-placeholder.jpg';
import imageSprBackgroundVolcanismLarge from '~/assets/spr-background-volcanism-large.jpg';
import imageSprBackgroundVolcanismPlaceholder from '~/assets/spr-background-volcanism-placeholder.jpg';
import imageSprBackgroundVolcanism from '~/assets/spr-background-volcanism.jpg';
import backgroundSpr from '~/assets/spr-background.jpg';
import imageSprComponentsDarkLarge from '~/assets/spr-components-dark-large.png';
import imageSprComponentsDarkPlaceholder from '~/assets/spr-components-dark-placeholder.png';
import imageSprComponentsDark from '~/assets/spr-components-dark.png';
import imageSprComponentsLightLarge from '~/assets/spr-components-light-large.png';
import imageSprComponentsLightPlaceholder from '~/assets/spr-components-light-placeholder.png';
import imageSprComponentsLight from '~/assets/spr-components-light.png';
import imageSprDesignSystemDarkLarge from '~/assets/spr-design-system-dark-large.png';
import imageSprDesignSystemDarkPlaceholder from '~/assets/spr-design-system-dark-placeholder.png';
import imageSprDesignSystemDark from '~/assets/spr-design-system-dark.png';
import imageSprDesignSystemLightLarge from '~/assets/spr-design-system-light-large.png';
import imageSprDesignSystemLightPlaceholder from '~/assets/spr-design-system-light-placeholder.png';
import imageSprDesignSystemLight from '~/assets/spr-design-system-light.png';
import imageSprLessonBuilderDarkLarge from '~/assets/spr-lesson-builder-dark-large.jpg';
import imageSprLessonBuilderDarkPlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import imageSprLessonBuilderDark from '~/assets/spr-lesson-builder-dark.jpg';
import imageSprLessonBuilderLightLarge from '~/assets/spr-lesson-builder-light-large.jpg';
import imageSprLessonBuilderLightPlaceholder from '~/assets/spr-lesson-builder-light-placeholder.jpg';
import imageSprLessonBuilderLight from '~/assets/spr-lesson-builder-light.jpg';
import videoSprMotionLarge from '~/assets/spr-motion-large.mp4';
import videoSprMotionPlaceholder from '~/assets/spr-motion-placeholder.jpg';
import videoSprMotion from '~/assets/spr-motion.mp4';
import imageSprSchema1DarkLarge from '~/assets/spr-schema-1-dark-large.png';
import imageSprSchema1DarkPlaceholder from '~/assets/spr-schema-1-dark-placeholder.png';
import imageSprSchema1Dark from '~/assets/spr-schema-1-dark.png';
import imageSprSchema1LightLarge from '~/assets/spr-schema-1-light-large.png';
import imageSprSchema1LightPlaceholder from '~/assets/spr-schema-1-light-placeholder.png';
import imageSprSchema1Light from '~/assets/spr-schema-1-light.png';
import imageSprSchema2DarkLarge from '~/assets/spr-schema-2-dark-large.png';
import imageSprSchema2DarkPlaceholder from '~/assets/spr-schema-2-dark-placeholder.png';
import imageSprSchema2Dark from '~/assets/spr-schema-2-dark.png';
import imageSprSchema2LightLarge from '~/assets/spr-schema-2-light-large.png';
import imageSprSchema2LightPlaceholder from '~/assets/spr-schema-2-light-placeholder.png';
import imageSprSchema2Light from '~/assets/spr-schema-2-light.png';
import imageSprStoryboarderDarkLarge from '~/assets/spr-storyboarder-dark-large.png';
import imageSprStoryboarderDarkPlaceholder from '~/assets/spr-storyboarder-dark-placeholder.png';
import imageSprStoryboarderDark from '~/assets/spr-storyboarder-dark.png';
import imageSprStoryboarderLightLarge from '~/assets/spr-storyboarder-light-large.png';
import imageSprStoryboarderLightPlaceholder from '~/assets/spr-storyboarder-light-placeholder.png';
import imageSprStoryboarderLight from '~/assets/spr-storyboarder-light.png';
import imageSeaweed1 from '~/assets/qqq.png';
import imageSeaweed2 from '~/assets/adaam.jpg';
import imageSeaweed3 from '~/assets/3.jpg';
import imageSeaweed4 from '~/assets/4.png';
import imageSeaweed5 from '~/assets/1-7.jpg';
import imageSeaweed6 from '~/assets/1-8.png';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { SegmentedControl, SegmentedControlOption } from '~/components/segmented-control';
import { ThemeProvider, useTheme } from '~/components/theme-provider';
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
import { baseMeta } from '~/utils/meta';
import { media } from '~/utils/style';
import styles from './seaweed-gan.module.css';

const title = 'Seaweed Image Generation Using GANs';
const description = (
  <>
    Project Overview This project focuses on generating images of seaweed using Generative
    Adversarial Networks (GANs). Similar to typical GAN architectures, it consists of two
    main components: <br />
    Generator: Creates synthetic seaweed images from random noise.
    <br /> Discriminator: Distinguishes between real seaweed images and those created by
    the generator.
  </>
);
const roles = [
  'Import and Setup',
  'Model building',
  'Training Process',
  'Save Generated Images',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const SmartSparrow = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const themes = ['dark', 'light'];

  const handleThemeChange = index => {
    toggleTheme(themes[index]);
  };

  return (
    <>
      <ProjectContainer>
        <ProjectBackground
          opacity={isDark ? 0.5 : 0.8}
          src={backgroundSpr}
          srcSet={`${backgroundSpr} 1080w, ${backgroundSprLarge} 2160w`}
          placeholder={backgroundSprPlaceholder}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://github.com/Kh1606/Projects/tree/main/Seaweed%20-%20GAN%20model"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={theme}
              srcSet={
                isDark
                  ? `${imageSeaweed1} 1280w, ${imageSeaweed1} 2560w`
                  : `${imageSeaweed1} 1280w, ${imageSeaweed1} 2560w`
              }
              width={1280}
              height={800}
              placeholder={
                isDark
                  ? imageSprLessonBuilderDarkPlaceholder
                  : imageSprLessonBuilderLightPlaceholder
              }
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="Sample seaweed image generated by the GAN model"
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Imports and Setup</ProjectSectionHeading>
            <ProjectSectionText>
              The project begins by importing necessary libraries, primarily using
              TensorFlow to build and train the neural networks. Key components include:
              <br />
              <li>Layers: Dense, Conv2D, UpSampling2D</li>
              <li>Optimizer: Adam</li> <br />
              These are used to construct the generator and discriminator models.
            </ProjectSectionText>
          </ProjectTextRow>
          <Image
            key={theme}
            srcSet={
              isDark
                ? `${imageSeaweed2} 1024w, ${imageSeaweed2} 2048w`
                : `${imageSeaweed2} 1024w, ${imageSeaweed2} 2048w`
            }
            width={1024}
            height={800}
            placeholder={
              isDark
                ? imageSprComponentsDarkPlaceholder
                : imageSprComponentsLightPlaceholder
            }
            alt="Code snippet showing the TensorFlow imports used to build the GAN"
            sizes="100vw"
          />
        </ProjectSection>
        <ProjectSection light={isDark}>
          <ProjectSectionContent>
            <ProjectTextRow>
              <SegmentedControl
                currentIndex={themes.indexOf(theme)}
                onChange={handleThemeChange}
              >
                <SegmentedControlOption>Dark theme</SegmentedControlOption>
                <SegmentedControlOption>Light theme</SegmentedControlOption>
              </SegmentedControl>
            </ProjectTextRow>
            <ProjectTextRow>
              <ProjectSectionHeading>Model Building</ProjectSectionHeading>
              <ProjectSectionText>
                Generator (build_generator())
                <li>
                  The generator takes a latent vector as input and uses Dense, Reshape,
                  Conv2D, and UpSampling2D layers to progressively upscale the vector into
                  an image of size 1024x1024.
                </li>{' '}
                <li>
                  {' '}
                  It starts from a small representation and increases the resolution step
                  by step using UpSampling2D.
                </li>
                <li>
                  The final layer uses a tanh activation function to generate RGB images
                  with values in the range [-1, 1].
                </li>
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              key={theme}
              srcSet={
                isDark
                  ? `${imageSeaweed3} 1024w, ${imageSeaweed3} 2048w`
                  : `${imageSeaweed3} 1024w, ${imageSeaweed3} 2048w`
              }
              width={1024}
              height={800}
              placeholder={
                isDark
                  ? imageSprComponentsDarkPlaceholder
                  : imageSprComponentsLightPlaceholder
              }
              alt="Generator network architecture used to upscale latent vectors into seaweed images"
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionText>
                Discriminator (build_discriminator())
                <li>
                  The discriminator takes an image as input and attempts to classify it as
                  real or fake.
                </li>{' '}
                <li>
                  {' '}
                  It consists of a series of Conv2D layers with strides of 2, followed by
                  LeakyReLU activations and dropout layers to reduce overfitting.
                </li>
                <li>
                  The output layer uses a sigmoid activation function to produce a
                  probability score indicating whether the input image is real or fake.
                </li>
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              key={theme}
              srcSet={
                isDark
                  ? `${imageSeaweed4} 1024w, ${imageSeaweed4} 2048w`
                  : `${imageSeaweed4} 1024w, ${imageSeaweed4} 2048w`
              }
              width={1024}
              height={800}
              placeholder={
                isDark
                  ? imageSprComponentsDarkPlaceholder
                  : imageSprComponentsLightPlaceholder
              }
              alt="Discriminator network architecture used to classify real vs generated images"
              sizes="100vw"
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Training Process</ProjectSectionHeading>
              <ProjectSectionText>
                The train_gan() function manages the training of both the discriminator
                and generator.
                <br /> Training Loop:
                <li>
                  In each iteration:
                  <li style={{ paddingLeft: '40px' }}>
                    The discriminator is trained on both real and generated images to
                    minimize classification error for real images and maximize it for
                    generated images.
                  </li>{' '}
                  <li style={{ paddingLeft: '40px' }}>
                    The generator is trained via the combined model to produce images that
                    the discriminator classifies as real.
                  </li>
                </li>{' '}
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              raised
              key={theme}
              srcSet={
                isDark
                  ? `${imageSeaweed5} 1280w, ${imageSeaweed5} 2560w`
                  : `${imageSeaweed5} 1280w, ${imageSeaweed5} 2560w`
              }
              width={1280}
              height={800}
              placeholder={
                isDark
                  ? imageSprDesignSystemDarkPlaceholder
                  : imageSprDesignSystemLightPlaceholder
              }
              alt="Training loop output showing generator and discriminator updates"
              sizes="100vw"
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ThemeProvider theme="dark" data-invert>
          <ProjectSection
            backgroundOverlayOpacity={0.5}
            backgroundElement={
              <Image
                srcSet={`${imageSprBackgroundVolcanism} 1280w, ${imageSprBackgroundVolcanismLarge} 2560w`}
                width={1280}
                height={900}
                placeholder={imageSprBackgroundVolcanismPlaceholder}
                alt="Underwater background image"
                sizes="100vw"
              />
            }
          >
            <ProjectSectionColumns width="full">
              <ProjectSectionContent width="full">
                <ProjectTextRow width="s">
                  <ProjectSectionHeading>Saving Generated Images</ProjectSectionHeading>
                  <ProjectSectionText>
                    This function generates and saves images produced by the generator
                    during training.
                    <br />
                    <br />
                    <li>
                      {' '}
                      Images are saved in PNG format, allowing the evaluation of the
                      generator's performance at different training epochs.
                    </li>
                  </ProjectSectionText>
                </ProjectTextRow>
              </ProjectSectionContent>
              <Image
                raised
                key={theme}
                srcSet={
                  isDark
                    ? `${imageSeaweed6} 1280w, ${imageSeaweed6} 2560w`
                    : `${imageSeaweed6} 1280w, ${imageSeaweed6} 2560w`
                }
                width={1280}
                height={800}
                placeholder={
                  isDark
                    ? imageSprDesignSystemDarkPlaceholder
                    : imageSprDesignSystemLightPlaceholder
                }
                alt="Sample seaweed images saved to disk during training epochs"
                sizes="100vw"
              />
            </ProjectSectionColumns>
          </ProjectSection>
        </ThemeProvider>

      </ProjectContainer>
      <Footer />
    </>
  );
};

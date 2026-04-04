import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SunHaze({
  fill = "currentColor",
  secondaryfill,
  strokewidth = 1,
  width = "1em",
  height = "1em",
  title = "badge 13",
  ...props
}: IconProps) {
  secondaryfill = secondaryfill || fill;

  return (
    <svg
      height={height}
      width={width}
      {...props}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="M11.25,14H1.75c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75H11.25c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={fill}
        />
        <path
          d="M14.25,17h-5.5c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h5.5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={fill}
        />
        <path
          d="M16.25,14h-2c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h2c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={fill}
        />
        <path
          d="M5.75,17H3.75c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h2c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={fill}
        />
        <path
          d="M13,10.939H5c-.316,0-.598-.198-.706-.496-.195-.542-.294-1.111-.294-1.693,0-2.757,2.243-5,5-5s5,2.243,5,5c0,.582-.099,1.152-.294,1.693-.107,.297-.39,.496-.706,.496Z"
          fill={secondaryfill}
        />
        <path
          d="M9,3c-.414,0-.75-.336-.75-.75V1.25c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v1c0,.414-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M13.773,4.727c-.192,0-.384-.073-.53-.22-.293-.293-.293-.768,0-1.061l.707-.707c.293-.293,.768-.293,1.061,0s.293,.768,0,1.061l-.707,.707c-.146,.146-.338,.22-.53,.22Z"
          fill={secondaryfill}
        />
        <path
          d="M16.75,9.5h-1c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h1c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M4.227,4.727c-.192,0-.384-.073-.53-.22l-.707-.707c-.293-.293-.293-.768,0-1.061s.768-.293,1.061,0l.707,.707c.293,.293,.293,.768,0,1.061-.146,.146-.338,.22-.53,.22Z"
          fill={secondaryfill}
        />
        <path
          d="M2.25,9.5H1.25c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h1c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default SunHaze;

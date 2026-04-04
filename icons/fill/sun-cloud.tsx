import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SunCloud({
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
          d="M13.75,10.5c-.234,0-.467,.026-.696,.079-.732-1.551-2.302-2.579-4.054-2.579s-3.322,1.028-4.054,2.579c-.229-.053-.461-.079-.696-.079-1.792,0-3.25,1.458-3.25,3.25s1.458,3.25,3.25,3.25H13.75c1.792,0,3.25-1.458,3.25-3.25s-1.458-3.25-3.25-3.25Z"
          fill={fill}
        />
        <path
          d="M9,2.75c-.414,0-.75-.336-.75-.75V1c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v1c0,.414-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M13.419,4.581c-.192,0-.384-.073-.53-.22-.293-.293-.293-.768,0-1.061l.707-.707c.293-.293,.768-.293,1.061,0s.293,.768,0,1.061l-.707,.707c-.146,.146-.338,.22-.53,.22Z"
          fill={secondaryfill}
        />
        <path
          d="M16.25,9h-1c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h1c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M4.581,4.581c-.192,0-.384-.073-.53-.22l-.707-.707c-.293-.293-.293-.768,0-1.061s.768-.293,1.061,0l.707,.707c.293,.293,.293,.768,0,1.061-.146,.146-.338,.22-.53,.22Z"
          fill={secondaryfill}
        />
        <path
          d="M2.75,9H1.75c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h1c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M12.741,8.75c-.392,0-.722-.304-.748-.701-.103-1.57-1.418-2.799-2.993-2.799s-2.89,1.229-2.993,2.799c-.028,.413-.368,.716-.798,.699-.413-.027-.726-.384-.699-.798,.155-2.355,2.127-4.201,4.49-4.201s4.335,1.845,4.49,4.201c.027,.414-.286,.771-.699,.798-.017,0-.034,.001-.05,.001Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default SunCloud;

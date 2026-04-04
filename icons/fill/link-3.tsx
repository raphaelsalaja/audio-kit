import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Link3({
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
          d="M9.75,12H3.75c-1.517,0-2.75-1.233-2.75-2.75V5.25c0-1.517,1.233-2.75,2.75-2.75h6c.999,0,1.922,.543,2.406,1.418,.2,.362,.069,.819-.293,1.02-.362,.2-.819,.069-1.02-.293-.221-.398-.64-.645-1.094-.645H3.75c-.689,0-1.25,.561-1.25,1.25v4c0,.689,.561,1.25,1.25,1.25h6c.689,0,1.25-.561,1.25-1.25,0-.414,.336-.75,.75-.75s.75,.336,.75,.75c0,1.517-1.233,2.75-2.75,2.75Z"
          fill={fill}
        />
        <path
          d="M14.25,15.5h-6c-.999,0-1.922-.543-2.406-1.418-.2-.362-.069-.819,.293-1.02,.364-.199,.819-.069,1.02,.293,.221,.398,.64,.645,1.094,.645h6c.689,0,1.25-.561,1.25-1.25v-4c0-.689-.561-1.25-1.25-1.25h-6c-.689,0-1.25,.561-1.25,1.25,0,.414-.336,.75-.75,.75s-.75-.336-.75-.75c0-1.517,1.233-2.75,2.75-2.75h6c1.517,0,2.75,1.233,2.75,2.75v4c0,1.517-1.233,2.75-2.75,2.75Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default Link3;

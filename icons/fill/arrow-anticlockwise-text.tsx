import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowAnticlockwiseText({
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
          d="m5.75,9.75h6.5c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75h-6.5c-.4141,0-.75.3359-.75.75s.3359.75.75.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m5.75,12.5h4c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75h-4c-.4141,0-.75.3359-.75.75s.3359.75.75.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m5.75,7h6.5c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75h-6.5c-.4141,0-.75.3359-.75.75s.3359.75.75.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m9,1c-2.5293,0-4.8447,1.1724-6.334,3.1064l-.1777-.9893c-.0732-.4077-.4609-.6772-.8711-.6055-.4082.0737-.6787.4634-.6055.8711l.54,3c.0596.3281.3281.5776.6592.6128.3271.0337.6465-.1528.7734-.4609,1.0049-2.4512,3.3662-4.0347,6.0156-4.0347,3.584,0,6.5,2.916,6.5,6.5s-2.916,6.5-6.5,6.5c-3.5469,0-6.4004-2.7754-6.4971-6.3188-.0117-.4141-.3467-.7612-.7705-.729-.4141.0112-.7402.356-.7295.77.1191,4.3613,3.6318,7.7778,7.9971,7.7778,4.4111,0,8-3.5889,8-8S13.4111,1,9,1Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default ArrowAnticlockwiseText;

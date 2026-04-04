import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GamingButtons({
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
        <rect
          height="6"
          width="6"
          fill={fill}
          rx="1.75"
          ry="1.75"
          x="2"
          y="2"
        />
        <circle cx="13" cy="13" fill={fill} r="3.25" />
        <path
          d="M7.78,10.22c-.293-.293-.768-.293-1.061,0l-1.72,1.72-1.72-1.72c-.293-.293-.768-.293-1.061,0s-.293,.768,0,1.061l1.72,1.72-1.72,1.72c-.293,.293-.293,.768,0,1.061,.146,.146,.338,.22,.53,.22s.384-.073,.53-.22l1.72-1.72,1.72,1.72c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22c.293-.293,.293-.768,0-1.061l-1.72-1.72,1.72-1.72c.293-.293,.293-.768,0-1.061Z"
          fill={secondaryfill}
        />
        <path
          d="M16.348,6.125l-2.266-3.924c-.451-.782-1.713-.783-2.164,0l-2.265,3.923c-.228,.391-.228,.858-.002,1.25,.223,.386,.638,.626,1.083,.626h4.531c.445,0,.86-.24,1.083-.626,.226-.392,.226-.859,0-1.249Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default GamingButtons;

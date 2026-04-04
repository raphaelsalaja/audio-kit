import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SignalOff({
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
          d="M2.75,15c-.414,0-.75-.336-.75-.75v-1.5c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v1.5c0,.414-.336,.75-.75,.75Z"
          fill={fill}
        />
        <path
          d="M5.75,15c-.414,0-.75-.336-.75-.75v-4c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v4c0,.414-.336,.75-.75,.75Z"
          fill={fill}
        />
        <path
          d="M9,15c-.414,0-.75-.336-.75-.75V7.75c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v6.5c0,.414-.336,.75-.75,.75Z"
          fill={fill}
        />
        <path
          d="M15.061,4.75l1.47-1.47c.293-.293,.293-.768,0-1.061s-.768-.293-1.061,0l-1.47,1.47-1.47-1.47c-.293-.293-.768-.293-1.061,0s-.293,.768,0,1.061l1.47,1.47-1.47,1.47c-.293,.293-.293,.768,0,1.061,.146,.146,.338,.22,.53,.22s.384-.073,.53-.22l1.47-1.47,1.47,1.47c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22c.293-.293,.293-.768,0-1.061l-1.47-1.47Z"
          fill={secondaryfill}
        />
        <circle cx="12.25" cy="14.25" fill={fill} r=".75" />
        <circle cx="15.25" cy="14.25" fill={fill} r=".75" />
      </g>
    </svg>
  );
}

export default SignalOff;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Reading({
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
        <circle cx="9" cy="3.75" fill={fill} r="2.75" strokeWidth="0" />
        <path
          d="m4.2832,7.2031c-.5376-.1704-1.1079-.0796-1.5649.2529-.4565.3335-.7183.8486-.7183,1.4141v4.6499c0,.7637.4888,1.4336,1.2168,1.667l5.25,1.6797c.1743.0557.354.0835.5332.0835v-8.2378l-4.7168-1.5093Z"
          fill={secondaryfill}
          opacity=".2"
          strokeWidth="0"
        />
        <path
          d="m14.7837,15.187c.7275-.2334,1.2163-.9033,1.2163-1.667v-4.6499c0-.5654-.2617-1.0806-.7183-1.4141-.4561-.3325-1.0273-.4248-1.5649-.2529l-4.7168,1.5093v8.2378c.1797,0,.3589-.0278.5332-.0835l5.2505-1.6797Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Reading;

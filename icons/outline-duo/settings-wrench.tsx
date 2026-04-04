import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SettingsWrench({
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
        <circle
          cx="9"
          cy="9"
          fill={secondaryfill}
          opacity=".3"
          r="7.25"
          strokeWidth="0"
        />
        <circle
          cx="9"
          cy="9"
          fill="none"
          r="7.25"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m10.4502,9.6001c-.1348.1006-.293.1499-.4502.1499-.1934,0-.3848-.0742-.5303-.2197l-1-1c-.2637-.2637-.2939-.6816-.0693-.9805l1.7668-2.3557c-.3717-.1145-.7585-.1941-1.1672-.1941-2.2061,0-4,1.7944-4,4,0,.5513.1121,1.0767.3146,1.5549l-2.6107,2.0305c.6443,1.1289,1.5815,2.0662,2.7103,2.7104l2.0305-2.6106c.4783.2026,1.0039.3147,1.5553.3147,2.2061,0,4-1.7944,4-4,0-.4087-.0796-.7952-.1939-1.1667l-2.3559,1.7668Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default SettingsWrench;

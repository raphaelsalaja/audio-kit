import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleCheck3({
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
          d="M9,1C4.589,1,1,4.589,1,9s3.589,8,8,8,8-3.589,8-8S13.411,1,9,1Zm3.947,5.641c-1.859,1.382-3.435,3.29-4.683,5.669-.129,.247-.385,.402-.664,.402-.277,.003-.538-.157-.667-.407-.575-1.117-1.218-2.025-1.965-2.776-.292-.293-.291-.769,.003-1.061,.292-.292,.768-.292,1.061,.003,.573,.576,1.09,1.228,1.563,1.972,1.239-2.045,2.734-3.726,4.458-5.007,.332-.246,.802-.178,1.049,.155,.247,.332,.178,.802-.155,1.049Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CircleCheck3;

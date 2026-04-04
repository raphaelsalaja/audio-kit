import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Dice3({
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
          d="M13.25,2H4.75c-1.517,0-2.75,1.233-2.75,2.75V13.25c0,1.517,1.233,2.75,2.75,2.75H13.25c1.517,0,2.75-1.233,2.75-2.75V4.75c0-1.517-1.233-2.75-2.75-2.75ZM6.707,6.707c-.391,.391-1.024,.391-1.414,0-.391-.39-.391-1.024,0-1.414,.391-.391,1.024-.391,1.414,0,.391,.39,.391,1.024,0,1.414Zm3,3c-.391,.391-1.024,.391-1.414,0-.391-.39-.391-1.024,0-1.414,.391-.391,1.024-.391,1.414,0,.391,.39,.391,1.024,0,1.414Zm3,3c-.391,.391-1.024,.391-1.414,0-.391-.39-.391-1.024,0-1.414,.391-.391,1.024-.391,1.414,0,.391,.39,.391,1.024,0,1.414Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Dice3;

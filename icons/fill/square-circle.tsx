import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareCircle({
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
          d="M11.5,16.5c-2.757,0-5-2.243-5-5,0-.467,.079-.949,.243-1.474,.122-.396,.544-.618,.939-.492,.396,.123,.615,.544,.492,.939-.119,.382-.175,.708-.175,1.026,0,1.93,1.57,3.5,3.5,3.5s3.5-1.57,3.5-3.5-1.57-3.5-3.5-3.5c-.316,0-.643,.056-1.028,.175-.397,.123-.816-.1-.938-.495-.122-.396,.1-.815,.495-.938,.526-.163,1.008-.242,1.472-.242,2.757,0,5,2.243,5,5s-2.243,5-5,5Z"
          fill={secondaryfill}
        />
        <rect
          height="9"
          width="9"
          fill={fill}
          rx="1.75"
          ry="1.75"
          x="2"
          y="2"
        />
      </g>
    </svg>
  );
}

export default SquareCircle;

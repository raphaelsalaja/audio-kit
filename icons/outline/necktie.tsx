import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Necktie({
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
          d="M10.25,5.25l1.881,8.464c.074,.334-.027,.682-.269,.924l-2.155,2.155c-.391,.391-1.024,.391-1.414,0l-2.155-2.155c-.242-.242-.343-.59-.269-.924l1.881-8.464"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.736,2.65c.294-.515,.085-1.186-.464-1.411-.579-.238-1.351-.451-2.272-.451s-1.693,.213-2.272,.451c-.549,.225-.758,.896-.464,1.411,.495,.867,.99,1.733,1.486,2.6h2.5l1.486-2.6Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Necktie;

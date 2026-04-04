import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HeartSlash({
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
          d="M4.61411 13.386L14.9892 3.0108C14.2091 2.3936 13.2365 2.00659 12.1632 2.00009C10.9679 2.01519 9.84001 2.49029 9.00011 3.30579C8.15931 2.49039 7.02841 2.01529 5.82241 2.00009C3.29211 2.01569 1.2413 4.08459 1.2511 6.60899C1.2511 9.52109 2.88321 11.7927 4.61411 13.386Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M6.38458 14.7969C7.12238 15.3067 7.77079 15.6721 8.18259 15.8872C8.43849 16.0205 8.71868 16.0874 8.99898 16.0874C9.28018 16.0874 9.56049 16.0205 9.81639 15.8872C11.4434 15.0386 16.749 11.8618 16.749 6.6118C16.7515 5.9695 16.6184 5.3581 16.3804 4.8013L6.38458 14.7969Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M1.99999 16.75C1.80759 16.75 1.61619 16.6768 1.46969 16.5303C1.17669 16.2373 1.17669 15.7627 1.46969 15.4698L15.4697 1.46981C15.7627 1.17681 16.2373 1.17681 16.5302 1.46981C16.8231 1.76281 16.8232 2.2374 16.5302 2.5303L2.53019 16.5303C2.38369 16.6768 2.19239 16.75 1.99999 16.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default HeartSlash;

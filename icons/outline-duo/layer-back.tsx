import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LayerBack({
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
          d="M2.665 5.44999L8.552 2.37998C8.842 2.22898 9.188 2.22896 9.478 2.38096L15.337 5.44999C15.871 5.73099 15.871 6.49596 15.337 6.77696L9.467 9.86796C9.175 10.022 8.82701 10.022 8.53501 9.86796L2.665 6.77696C2.131 6.49596 2.131 5.73099 2.665 5.44999Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M6 11.7958L2.66299 10.039C2.39599 9.898 2.26199 9.637 2.26199 9.375"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.736 9.375C15.736 9.636 15.602 9.898 15.335 10.039L11.9997 11.7958"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 6V17"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.25 15L9 17.25L6.75 15"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12 8.54574L15.337 6.78811C15.871 6.50711 15.871 5.74214 15.337 5.46114L9.467 2.37014C9.175 2.21614 8.82701 2.21614 8.53501 2.37014L2.665 5.46114C2.131 5.74214 2.131 6.50711 2.665 6.78811L6 8.54391"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default LayerBack;

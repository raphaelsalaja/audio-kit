import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Shield2({
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
          d="M8.16963 1.22703C8.33372 1.16922 8.67031 1.05063 9.00028 1.05075C9.1795 1.05082 9.36084 1.079 9.53357 1.13368L14.7836 2.81368C15.5071 3.04612 16 3.71943 16 4.48V11C16 12.8725 14.6025 14.2314 13.2749 15.1143C12.1533 15.8602 10.9062 16.4082 9.63302 16.8379C9.57968 16.8559 9.49355 16.8849 9.40738 16.9058C9.09216 16.9819 8.76807 16.9684 8.46011 16.8683C7.80803 16.6572 6.25089 16.1022 4.84192 15.1909C3.47441 14.3064 2 12.9239 2 11V4.48C2 3.71932 2.49139 3.04506 3.21675 2.81358C4.86562 2.28594 6.53686 1.80232 8.16963 1.22703Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M2 9H9V16.9545C9.13611 16.9545 9.27256 16.9383 9.40738 16.9058C9.49355 16.8849 9.57968 16.8559 9.63302 16.8379C10.9062 16.4082 12.1533 15.8602 13.2749 15.1143C14.6025 14.2314 16 12.8725 16 11V9H9V1.05075C8.67012 1.05069 8.33367 1.16924 8.16963 1.22704C7.07517 1.61265 5.96344 1.95708 4.85274 2.30119C4.30643 2.47044 3.76038 2.63962 3.21675 2.81358C2.49139 3.04506 2 3.71932 2 4.48V9Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Shield2;

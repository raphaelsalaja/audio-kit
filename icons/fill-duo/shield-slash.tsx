import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ShieldSlash({
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
          d="M15.067 2.93298C14.9773 2.88556 14.8826 2.84549 14.7836 2.81368L9.53357 1.13368C9.36084 1.079 9.1795 1.05082 9.00028 1.05075C8.67031 1.05063 8.33372 1.16922 8.16963 1.22703C7.07517 1.61265 5.96344 1.95708 4.85274 2.30119C4.30643 2.47044 3.76038 2.63962 3.21675 2.81358C2.49139 3.04506 2 3.71932 2 4.48V11C2 12.3767 2.75502 13.4762 3.6856 14.3144L15.067 2.93298Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M16 5.18196L5.56107 15.6209C6.74951 16.2793 7.91779 16.6928 8.4601 16.8683C8.76806 16.9684 9.09215 16.9819 9.40737 16.9058C9.49355 16.8849 9.57968 16.8559 9.63302 16.8379C10.9062 16.4082 12.1533 15.8602 13.2749 15.1143C14.6025 14.2314 16 12.8725 16 11V5.18196Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M16.5303 1.46967C16.8232 1.76256 16.8232 2.23744 16.5303 2.53033L2.53033 16.5303C2.23744 16.8232 1.76256 16.8232 1.46967 16.5303C1.17678 16.2374 1.17678 15.7626 1.46967 15.4697L15.4697 1.46967C15.7626 1.17678 16.2374 1.17678 16.5303 1.46967Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ShieldSlash;

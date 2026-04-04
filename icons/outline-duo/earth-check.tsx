import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EarthCheck({
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
          d="M5.78223 9.8793C6.30527 9.70124 7.60843 9.44874 8.63672 9.8627C9.9221 10.3802 9.99503 11.2603 10.7236 11.515C11.8569 11.9113 13.1149 9.91128 14.0898 10.2416C14.4143 10.3518 14.6567 10.4686 14.8846 10.6513L13.0479 13.1693C12.1999 12.5648 11.038 12.6185 10.2529 13.3148L10.0977 13.4662C9.66736 13.9281 9.47068 14.521 9.49805 15.1039C9.26472 15.1106 9.02671 15.1086 8.78418 15.0961C8.78406 14.6793 8.57032 14.4252 8.37012 14.1527C7.98147 13.7147 7.27665 13.6726 6.96777 13.0336C6.62997 12.3344 7.03431 11.6627 6.7002 10.9643C6.42355 10.386 6.01893 10.0393 5.78223 9.8793Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6.85461 2.04793C4.55874 2.61682 3.05356 4.72304 2.58795 5.70505C2.85039 6.71247 3.86288 8.96093 5.81335 9.89552C4.94986 8.70187 5.18692 7.2491 6.2705 6.41618C7.71176 5.30831 9.14568 7.13997 9.80065 6.61935C10.0648 6.37554 9.77525 4.79077 9.97843 3.85109C10.1562 3.37702 11.0248 2.54063 13.0769 2.9876C12.1372 2.17491 9.72446 1.33681 6.85461 2.04793Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M13.0008 2.98069L11.4893 2.9094C10.4948 2.8625 9.73551 3.7861 9.97371 4.7527L10.2457 5.8562C10.3051 6.0973 10.2086 6.3499 10.0036 6.4899C9.83801 6.603 9.62661 6.6251 9.44121 6.5487L8.51411 6.1666C7.78921 5.8678 6.96161 5.9623 6.32271 6.4169C5.75691 6.8194 5.40531 7.4578 5.36751 8.1511L5.29651 9.4532"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.59171 5.7457C3.02041 6.8697 3.97031 8.6883 5.49671 9.6832C5.92261 9.9178 6.90041 10.6811 6.83241 11.8894C6.73921 13.5437 7.49191 13.4869 8.29061 14.0814C8.88931 14.5269 8.74521 15.5695 8.74521 16.2151"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75409 9.84739C6.90799 9.60409 8.33619 9.14719 9.99159 10.7675C11.7665 12.5048 12.44 9.57859 14.3102 10.1823"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.744 15L13.353 16.5L16.75 12"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 9C16.25 4.9959 13.0041 1.75 9 1.75C4.9959 1.75 1.75 4.9959 1.75 9C1.75 12.9065 4.8396 16.0913 8.7086 16.2442"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default EarthCheck;

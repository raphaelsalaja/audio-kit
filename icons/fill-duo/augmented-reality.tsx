import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AugmentedReality({
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
          d="M16.8037 14.1421L15.3828 11.4614C14.9038 10.56 13.9731 10 12.9531 10H12.2139L10.73 10.8604C10.209 11.1636 9.60989 11.3252 8.99999 11.3252C8.39209 11.3252 7.79299 11.1641 7.26809 10.8589L5.78649 10H5.04689C4.02689 10 3.09619 10.5601 2.61719 11.4619L1.19629 14.1421C1.07329 14.3745 1.08059 14.6543 1.21629 14.8799C1.35199 15.1055 1.59569 15.2432 1.85889 15.2432H16.1411C16.4043 15.2432 16.6479 15.1055 16.7837 14.8799C16.9195 14.6543 16.9268 14.3745 16.8037 14.1421Z"
          fill={fill}
          opacity="0.4"
        />
        <path
          d="M15 17H3C1.897 17 1 16.103 1 15C1 13.897 1.897 13 3 13H15C16.103 13 17 13.897 17 15C17 16.103 16.103 17 15 17Z"
          fill={fill}
        />
        <path
          d="M4.7618 2.4543C4.5935 2.7463 4.5 3.0815 4.5 3.4284V6.3962C4.5 7.0891 4.8721 7.7351 5.4717 8.0832L8.0215 9.5617C8.3233 9.737 8.6621 9.8249 9 9.8249V4.9123L4.7618 2.4543Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9 9.82501C9.3389 9.82501 9.6768 9.73761 9.9775 9.56231L12.5293 8.08281C13.1279 7.73511 13.5 7.08911 13.5 6.39631V3.42851C13.5 3.08161 13.4066 2.74641 13.2381 2.45441L9 4.91241V9.82501Z"
          fill={secondaryfill}
        />
        <path
          d="M9.00001 4.9124L13.2381 2.4544C13.0702 2.1634 12.8277 1.9153 12.5283 1.7415L9.97851 0.262996C9.37501 -0.0876042 8.62501 -0.0876042 8.02151 0.262996L5.47071 1.742C5.17191 1.9156 4.92971 2.1636 4.76181 2.4544L9.00001 4.9124Z"
          fill={secondaryfill}
          opacity="0.2"
        />
      </g>
    </svg>
  );
}

export default AugmentedReality;

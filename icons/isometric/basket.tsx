import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Basket({
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
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill="none">
        <path
          d="M15 15.4294L11 13.4294L5 10.4294L8.55279 8.65305C8.83431 8.51229 9.16569 8.51229 9.44721 8.65305L19 13.4294L15 15.4294Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M21 15.5L13 19.5L12.5 20.7147L12.1759 21.3868L12.426 21.7164L20 17.9294L21 15.5Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path d="M22.5985 11.4507L15 15.25L1.21289 8.35645" stroke={fill} />
        <path
          d="M8.32918 4.58541L1.69835 7.90083C1.28792 8.10604 1.06983 8.56424 1.16937 9.01218L2.89675 16.7854C2.96207 17.0793 3.15638 17.3282 3.42572 17.4629L11.3292 21.4146C11.7515 21.6257 12.2485 21.6257 12.6708 21.4146L19.6863 17.9069C19.8894 17.8053 20.0518 17.6377 20.147 17.4315L22.5938 12.13C22.8202 11.6396 22.6162 11.0581 22.1331 10.8165L9.67082 4.58541C9.24853 4.37426 8.75147 4.37426 8.32918 4.58541Z"
          stroke={fill}
        />
        <path d="M8 14.75V15.75V16.75" stroke={fill} strokeLinecap="round" />
        <path
          d="M5.5 13.5046V14.5046V15.5046"
          stroke={fill}
          strokeLinecap="round"
        />
        <path
          d="M10.5 15.9843V16.9843V17.9843"
          stroke={fill}
          strokeLinecap="round"
        />
        <path d="M14.9999 15.25L12.0696 21.5991" stroke={fill} />
        <path
          d="M8 11.75V7.17705C8 6.60889 8.321 6.0895 8.82918 5.83541L14.5528 2.97361C15.2177 2.64116 16 3.12465 16 3.86803V7.75"
          stroke={fill}
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

export default Basket;

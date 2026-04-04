import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BasketFull({
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
          d="M20.9998 15.5L12.9998 19.5L12.1995 21.4452L12.5804 21.6392L19.9998 17.9294L20.9998 15.5Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M19.0724 13L15.0724 15L4.78979 10.0822L5.02473 8.97614L15.0724 14L19.0724 12V13Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M22.6873 11.4064L15.0001 15.25L1.25415 8.37701"
          stroke={fill}
        />
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
        <path d="M14.9999 15.25L12.0679 21.6028" stroke={fill} />
        <path
          d="M8 11.75V7.17705C8 6.60889 8.321 6.0895 8.82918 5.83541L14.5528 2.97361C15.2177 2.64116 16 3.12465 16 3.86803V7.75"
          stroke={fill}
          strokeLinecap="round"
        />
        <path d="M15.0725 11.3831V15" stroke={fill} />
        <path
          d="M19.0725 13.1738V9.91454C19.0725 9.53577 18.8585 9.18951 18.5197 9.02012L15.5197 7.52012C15.2382 7.37935 14.9068 7.37935 14.6253 7.52012L11.6253 9.02012C11.2865 9.18951 11.0725 9.53577 11.0725 9.91454V13.3559"
          stroke={fill}
        />
        <path
          d="M19.0725 9.39825L15.0725 11.3983L11.0725 9.39825"
          stroke={fill}
        />
        <path
          d="M4.82897 10.202C4.82517 10.1351 4.82324 10.0678 4.82324 10C4.82324 8.067 6.39025 6.5 8.32324 6.5C9.77441 6.5 11.0193 7.38317 11.5498 8.64135L11.6783 8.99523"
          stroke={fill}
        />
      </g>
    </svg>
  );
}

export default BasketFull;

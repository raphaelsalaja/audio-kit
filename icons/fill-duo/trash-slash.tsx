import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TrashSlash({
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
          d="M12.9861 5H3.40771L3.88681 14.0918L12.9861 5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M4.85742 16.3242C5.34022 16.7417 5.96322 17 6.64842 17H11.3525C12.8164 17 14.0224 15.853 14.0986 14.3896L14.505 6.67676L4.85742 16.3242Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M2.7501 5.5H12.4856L13.9868 4H12V2.75C12 1.7852 11.2148 1 10.25 1H7.75C6.7852 1 6 1.7852 6 2.75V4H2.75C2.3359 4 2 4.3359 2 4.75C2 5.1641 2.336 5.5 2.7501 5.5ZM7.5001 2.75C7.5001 2.6143 7.6144 2.5 7.7501 2.5H10.2501C10.3858 2.5 10.5001 2.6143 10.5001 2.75V4H7.5001V2.75Z"
          fill={fill}
        />
        <path
          d="M2.00005 16.75C1.80815 16.75 1.61625 16.6801 1.46975 16.53C1.17675 16.24 1.17675 15.76 1.46975 15.4699L15.4697 1.46987C15.7627 1.17997 16.2372 1.17997 16.5301 1.46987C16.823 1.75987 16.8231 2.23995 16.5301 2.53005L2.53015 16.53C2.38365 16.68 2.19195 16.75 2.00005 16.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default TrashSlash;

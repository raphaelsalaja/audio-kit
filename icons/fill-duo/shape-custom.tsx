import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ShapeCustom({
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
          d="M12.141 1.75996C12.5606 1.86806 13.1009 2.22404 13.1454 2.89765L13.3289 5.68592L16.5971 6.19806C17.0995 6.27744 17.5469 6.60158 17.6991 7.10451C17.861 7.6396 17.6279 8.18078 17.1532 8.47891L12.7573 11.2428L11.6133 15.3321C11.6027 15.3696 11.5893 15.4063 11.5731 15.4418C11.2408 16.1686 10.3835 16.4866 9.65797 16.1578C9.57508 16.1207 9.50571 16.0789 9.45186 16.0433L6.71935 14.2758L2.69244 15.8398C2.15707 16.0485 1.58804 15.9319 1.20483 15.6158C1.01072 15.4556 0.839933 15.2228 0.775349 14.9274C0.707783 14.6184 0.770929 14.3022 0.947039 14.0329L3.14405 10.6588L1.46282 7.99644C1.19691 7.5753 1.23339 7.08696 1.47186 6.72003C1.69922 6.37018 2.08138 6.16027 2.49069 6.11294L7.28293 5.55794L10.7277 2.12365C11.0935 1.75798 11.645 1.63218 12.141 1.75996Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ShapeCustom;

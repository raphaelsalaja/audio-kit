import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BowlFood({
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
        <ellipse
          cx="3.5"
          cy="4.5"
          fill={secondaryfill}
          rx=".866"
          ry="1.936"
          transform="translate(-2.157 3.793) rotate(-45)"
        />
        <path
          d="M16.78,7.22c-.141-.141-.331-.22-.53-.22H1.75c-.199,0-.39,.079-.53,.22-.141,.141-.22,.332-.22,.531,.002,3.202,1.935,5.959,5.042,7.196,.088,.035,.183,.053,.277,.053h5.361c.095,0,.189-.018,.277-.053,3.107-1.237,5.04-3.994,5.042-7.196,0-.199-.079-.39-.22-.531Z"
          fill={fill}
        />
        <path
          d="M7,4.573c.413-.369,.945-.573,1.5-.573,.825,0,1.583,.461,1.978,1.205,.106,.201,.298,.342,.521,.385,.226,.042,.454-.019,.627-.166,.227-.193,.606-.424,1.124-.424,.556,0,1.066,.255,1.4,.7,.147,.196,.372,.3,.601,.3,.156,0,.314-.049,.449-.15,.331-.249,.398-.719,.149-1.05-.62-.826-1.567-1.3-2.6-1.3-.486,0-.966,.114-1.403,.327-.704-.833-1.738-1.327-2.847-1.327-.925,0-1.812,.339-2.5,.956-.309,.276-.335,.75-.059,1.059,.277,.309,.752,.333,1.059,.058Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default BowlFood;
